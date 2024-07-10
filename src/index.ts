// import express, { Request, Response } from 'express';

// const app = express();
// const port = 7000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, world!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/database';
import todoRoutes from './routes/todoRoutes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000', // Update this to the correct frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(todoRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(err => {
  console.log('Unable to connect to the database:', err);
  process.exit(1); // Exit the process with a non-zero status code
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


