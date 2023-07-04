import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "Email already exsists"]
    },
    score: {
        type: Number,
        default: 0
    }
})

UserSchema.methods.createJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

const User = mongoose.model("User", UserSchema);
export default User;