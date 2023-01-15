import express from 'express';
import { getUser, Register, Login, Logout } from '../controllers/user.js';
import { refreshToken } from '../controllers/refreshToken.js';
import { validRegister, validLogin } from '../middleware/validator.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.route('/user').get(verifyToken, getUser);
router.route('/token').get(refreshToken);
router.route('/register').post(validRegister, Register);
router.route('/login').post(validLogin, Login);
router.route('/logout').delete(Logout);

export default router;