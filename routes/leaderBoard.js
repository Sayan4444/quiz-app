import express from "express";
import { getLeaderBoard } from "../controllers/leaderBoard.js";
import protect from "../middleware/protect.js";

const router = express.Router();

router.get("/", protect, getLeaderBoard)

export default router;