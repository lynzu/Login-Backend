import User from '../models/user.js';

try {
  await User.drop()
  console.log('Table removed');
} catch (error) {
  console.log(error);
}