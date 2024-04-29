import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/dbConnection.js";
import {errorMiddleware} from "./middleware/errorMiddleware.js";
import reservationRouter from "./routes/Reservationroute.js";

const app = express();
dotenv.config({ path: './.env' });

app.use(
  cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["POST"],
    credentials : true
}))

app.use(express.json());
app.use(express.urlencoded({extended : true}))

const port = process.env.PORT || 3000; 


connectDB();

app.use('/api/reservation',reservationRouter);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Connected to Backend server on ${port}`);
});



export default app;
