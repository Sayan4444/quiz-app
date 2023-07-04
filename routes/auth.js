import express from "express";
import { signin, signout, getMe } from "../controllers/auth.js";
import protect from "../middleware/protect.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signout", signout);
router.get("/me", protect, getMe);

export default router;