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
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3000', // Atur origin sesuai domain atau port frontend Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Atur metode HTTP yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Atur header yang diizinkan
};

app.use(cors(corsOptions));

// app.use(express.json());

app.use(bodyParser.json());
app.use(todoRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(err => console.log('Unable to connect to the database:', err));
