import mongoose from "mongoose";
import bcrypt from "bcrypt";

const QuestionSchema = new mongoose.Schema({
    question: String,
    options: {
        type: [{
            type: String,
        }]
    },
    correctOption: String,
    score: Number
})

QuestionSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.correctOption = await bcrypt.hash(this.correctOption, salt);
    next();
})

const Question = mongoose.model("Question", QuestionSchema);
export default Question;