import express from 'express'
import colors from "colors";
import morgan from 'morgan'
import cors from "cors";
import { CORSConfig } from './config/cors';
import { db } from './config/db'
import { limiter } from './config/limiter';

// Routers
import categoryRouter from "./routes/categoryRouter";
import authRouter from "./routes/authRouter";

async function connectDB () {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors.blue.bold("Connected to the database sucessfully"));
    } catch (error) {
        console.log(colors.red.bold(`Error while connecting to the database: ${error}`));
    }
}
connectDB();


const app = express()

app.use(cors(CORSConfig))
app.use(morgan('dev'))
app.use(express.json())
app.use(limiter)

// API
app.use("/api/admin/", categoryRouter);
app.use("/api/auth/", authRouter);

export default app