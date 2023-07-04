import express from "express";
import { getQuestion, checkAnswer } from "../controllers/question.js";
import protect from "../middleware/protect.js";

const router = express.Router();

router.get("/:id", protect, getQuestion)
router.post("/:id/checkAnswer", protect, checkAnswer)

export default router;