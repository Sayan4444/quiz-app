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
    marks: Number
})

QuestionSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    const hashedCorrectAnswer = await bcrypt.hash(String(this.correctOption), salt);
    this.correctOption = hashedCorrectAnswer;
    next();
})

QuestionSchema.methods.checkAnswer = async function (selectedOption) {
    return await bcrypt.compare(selectedOption, this.correctOption)
}

const Question = mongoose.model("Question", QuestionSchema);
export default Question;