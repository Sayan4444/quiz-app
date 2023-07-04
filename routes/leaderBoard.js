import express from "express";
import { getLeaderBoard } from "../controllers/leaderBoard";
const router = express.Router();

router.get("/", getLeaderBoard)

export default router;