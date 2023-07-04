import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config({ path: './config/config.env' });
app.use(express.json());
app.use(cors());

import authRouter from "./routes/auth"
import questionRouter from "./routes/question"
import leaderBoardRouter from "./routes/leaderBoard"

app.use("/api/auth", authRouter);
app.use("/api/question", questionRouter);
app.use("/api/leaderBoard", leaderBoardRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`sever running on port ${PORT}`))