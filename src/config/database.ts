import { Sequelize } from 'sequelize-typescript';
// import { Todo } from '../models/todo';
import { Todo } from '../models/todoModels';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'todo_db',
  models: [Todo],
  logging: false, // Disable logging if not needed
});

export default sequelize;