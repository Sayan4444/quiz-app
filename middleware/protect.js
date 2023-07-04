import User from '../Model/User.js';
import jwt from "jsonwebtoken";

export default async function protect(req, res, next) {
    let token;
    if (req.cookies)
        token = req.cookies.token;
    else
        throw new Error()
    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            error: 'Not authorized to access this route'
        })
    }
}