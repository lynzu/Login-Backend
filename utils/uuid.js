import nanoid from 'nanoid/generate.js';
import User from '../models/user.js';

async function uuid(n) {
  const id = '53' + nanoid('123457890', n);
  const userId = await User.findOne({
    where: {
      uuid: id
    }
  });
  if (userId) return uuid(n);
  else return id;
}

export default uuid;