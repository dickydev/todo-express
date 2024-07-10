import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../models/todoModels';

// Import mysql2 package to fix the "Please install mysql2 package manually" issue.
import mysql2 from 'mysql2';

const sequelize = new Sequelize({
  dialect: 'mysql',
  dialectModule: mysql2, // Use mysql2 as the dialect module
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
