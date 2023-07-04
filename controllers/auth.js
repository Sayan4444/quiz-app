import User from "../Model/User.js";

export async function signin(req, res) {
    const { name, email } = req.body;
    let user;
    user = await User.findOne({ email })
    if (!user) user = await User.create({ name, email });

    const token = user.createJwtToken();

    // const options = {
    //     expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    //     httpOnly: true,
    //     secure: false,
    // }
    // if (process.env.ENV !== 'dev') {
    //     options.secure = true;
    //     options.sameSite = 'none'
    // }
    res.cookie('token', token, options())
    return res.json({
        success: true,
        user
    })
}
export async function signout(req, res) {
    return res
        .clearCookie('token', options())
        .json({
            success: true,
            data: {}
        })
}

export async function getMe(req, res) {
    res.json({
        success: true,
        user: req.user
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