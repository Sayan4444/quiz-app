import User from "../Model/User.js";

export async function signin(req, res) {
    const { name, email } = req.body;
    let user;
    user = await User.findOne({ email })
    if (!user) user = await User.create({ name, email });
    req.session.user = user
    const token = user.createJwtToken();
    res.cookie('token', token, options())
        .json({
            success: true,
            user
        })
}
export async function signout(req, res) {
    delete req.session.user;
    res.clearCookie('token', options())
        .json({
            success: true,
            data: {}
        })
}

export async function getMe(req, res) {
    res.json({
        success: true,
        user: req.session.user
    })
}

function options() {
    const options = {
        httpOnly: true,
        secure: false,
    }
    if (process.env.ENV !== 'dev') {
        options.secure = true;
        options.sameSite = 'none'
    }
    return options;
}