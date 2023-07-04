import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config({ path: './config/config.env' });
app.use(express.json());
app.use(cors());
app.use(cookieParser());

import connectDB from "./config/connectDB.js";
connectDB();

import authRouter from "./routes/auth.js"
import questionRouter from "./routes/question.js"
import leaderBoardRouter from "./routes/leaderBoard.js"

app.use("/api/auth", authRouter);
app.use("/api/question", questionRouter);
app.use("/api/leaderBoard", leaderBoardRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`sever running on port ${PORT}`))