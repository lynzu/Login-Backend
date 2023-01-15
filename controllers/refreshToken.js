import User from '../models/user.js';
import { accessGen, accessDecode, refreshDecode } from '../utils/jwt.js';

export const refreshToken = async(req, res) => {
  try {
    console.log(req.cookies)
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ msg: 'Please login' });
    const user = await User.findOne({
      where: {
        refresh_token: refreshToken
      }
    });
    if (!user) return res.sendStatus(403);
    const accessToken = await accessGen(user.uuid);
    res.json({ accessToken });
  } catch (error) {
    console.log(error);
  }
};