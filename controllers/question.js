import User from "../Model/User.js";
import Question from "../Model/Question.js";

export async function getQuestion(req, res) {
    const { id } = req.params;
    console.log(req.session.user);
    const question = await Question.findById(id).select("-correctOption");
    res.json({
        success: true,
        question
    });
}
export async function checkAnswer(req, res) {
    const { selectedOption } = req.body
    const { id } = req.params;
    const question = await Question.findById(id).select("correctOption marks");
    const isCorrect = await question.checkAnswer(selectedOption)
    if (!isCorrect) {
        return res.json({
            success: true,
            message: "incorrect option selected"
        })
    }
    const user = await User.findByIdAndUpdate(req.session.user._id,
        { $inc: { score: question.marks } },
        { new: true }
    )
    req.session.user = user;
    return res.json({
        success: true,
        message: "correct option selected",
        user
    })
}

