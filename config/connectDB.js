import mongoose from "mongoose"

mongoose.set('strictQuery', false);

export default function connectDB() {
    const DB = process.env.MONGO_URI
    mongoose.connect(DB)
        .then(() => console.log("connected to mongoDB server"))
        .catch((err) => console.log("not connected to mongo server"));
}
