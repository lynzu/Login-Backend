import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import router from './routes/index.js';

const app = express();
dotenv.config();

try {
  await db.authenticate();
  console.log('Database connected...');
} catch (error) {
  console.log(error);
}

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.status(200).json('Hi');
});
app.listen(process.env.PORT || 3000, () => {
  console.log('Server up..');
});
