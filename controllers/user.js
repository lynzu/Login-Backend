import User from '../models/user.js';
import { hash, compare } from '../utils/password.js';
import { accessGen, refreshGen, accessDecode, refreshDecode } from '../utils/jwt.js';
import uuidGen from '../utils/uuid.js';

export const getUser = async(req, res) => {
  try {
    const user = await User.findAll({
      attributes: ['uuid', 'username', 'role']
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async(req, res) => {
  const { username, password, password2 } = req.body;
  const user = await User.findOne({
    where: {
      username
    }
  });

  if (user) return res.status(400).json({ msg: 'User already exist' });
  const uuid = await uuidGen(4);
  const hashPassword = await hash(password);
  try {
    await User.create({
      uuid: uuid,
      username: username,
      password: hashPassword
    });
    res.json({ msg: 'Register successfully' });
  } catch (error) {
    res.status(400).json({ msg: 'Register failed' });
    console.log(error);
  }
};

export const Login = async(req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (!user) return res.status(400).json({ msg: 'User not exist' });
    const comparePassword = await compare(req.body.password, user.password);
    if (!comparePassword) return res.status(400).json({ msg: 'Password incorrect' });
    const accessToken = await accessGen(user.uuid);
    const refreshToken = await refreshGen(user.uuid);
    await User.update({refresh_token: refreshToken}, {
      where: {
        uuid: user.uuid
      }
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    });
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const user = await User.findOne({
    where: {
      refresh_token: refreshToken
    }
  });
  if (!user) return res.sendStatus(204);
  User.update({refresh_token: null}, {
    where: {
      uuid: user.uuid
    }
  });
  res.clearCookie('refreshToken');
  return res.json({ msg: 'Logout successfully' });
};