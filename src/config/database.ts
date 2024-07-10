import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../models/todoModels';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'todo_db',
  models: [Todo],
  logging: false, // Disable logging if not needed
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

export default sequelize;
