import { Sequelize } from 'sequelize-typescript';
// import { Todo } from '../models/todo';
import { Todo } from '../models/todoModels';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [Todo],
  logging: false, // Disable logging if not needed
});

export default sequelize;