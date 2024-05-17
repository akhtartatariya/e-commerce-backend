import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {

        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
    } catch (e) {
        console.log(" error while connecting with mongodb " + e)
    }
}

export default connectDB
