import jwt from 'jsonwebtoken';

export const accessGen = (uuid) => {
  try {
    return jwt.sign({ uuid }, process.env.ACCESS_TOKEN, { expiresIn: '15s' });
  } catch (error) {
    console.log(error);
  }
};

export const refreshGen = (uuid) => {
  try {
    return jwt.sign({ uuid }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });
  } catch (error) {
    console.log(error);
  }
};

export const accessDecode = (token) => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN);
  } catch (error) {
    console.log(error);
  }
};

export const refreshDecode = (token) => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN);
  } catch (error) {
    console.log(error);
  }
};