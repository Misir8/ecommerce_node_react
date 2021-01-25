import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {baseRouter} from './routes/index.route';
import connectDb from "./db/db";

dotenv.config({ path: './config/.env' });

connectDb();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', baseRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`port listening on ${PORT}`);
});
