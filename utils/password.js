import bcrypt from 'bcryptjs';

export const hash = (password) => {
  return bcrypt.hashSync(password, 10);
};

export const compare = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};