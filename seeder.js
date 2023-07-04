import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });

import User from "./Model/User.js";
import Question from "./Model/Question.js";

import { userData, questionData } from "./data/data.js";

import connectDB from "./config/connectDB.js";
connectDB();

async function resetDB() {
    try {
        // await User.deleteMany();
        await Question.deleteMany();

        // await User.create(userData);
        await Question.create(questionData);
        console.log('DB reset done');
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

resetDB();
