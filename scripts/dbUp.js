import db from '../config/database.js';

try {
  await db.sync()
  console.log('Database created');
} catch (error) {
  console.log(error);
}