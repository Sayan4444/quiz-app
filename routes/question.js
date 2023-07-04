import express from "express";
import { getQuestion, checkAnswer } from "../controllers/question.js";
const router = express.Router();

router.get("/:id", getQuestion)
router.post("/:id/checkAnswer", checkAnswer)

export default router;