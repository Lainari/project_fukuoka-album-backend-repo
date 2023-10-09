import express, { Express } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { routes } from './routes/index';
config();

const app: Express = express();

app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true
}));

app.use(express.json());

routes(app);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
});