import { accessDecode } from '../utils/jwt.js';

export const verifyToken = async(req, res, next) => {
  const authHead = req.headers.authorization;
  if (!authHead) return res.status(400).json({ msg: 'Token not found' });
  const token = authHead && authHead.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  const user = await accessDecode(token);
  if (user == null) return res.status(403).json({ msg: 'Session expired' });
  next();
};