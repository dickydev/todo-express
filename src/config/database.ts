import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../models/todoModels';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [Todo],
  logging: false,
});

export default sequelize;
