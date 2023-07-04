import User from "../Model/User.js";

export async function getLeaderBoard(req, res) {
    const users = await User.find().sort({ score: -1 });
    res.json({
        success: true,
        users
    })
}
