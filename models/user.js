import { Sequelize } from 'sequelize';
import db from '../config/database.js';
import uuidGen from '../utils/uuid.js';

const { DataTypes } = Sequelize;

const User = db.define('users', {
  uuid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
    allowNull: false
  },
  refresh_token: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true
});

export default User;