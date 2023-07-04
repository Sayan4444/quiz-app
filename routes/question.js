import express from "express";
import { getQuestion, checkAnswer } from "../controllers/question";
const router = express.Router();

router.get("/:id", getQuestion)
router.post("/:id/checkAnswer", checkAnswer)

export default router;