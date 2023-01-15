import User from '../models/user.js';

try {
  await User.sync()
  console.log('Table created');
} catch (error) {
  console.log(error);
}