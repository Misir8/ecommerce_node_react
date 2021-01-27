import * as mongoose from "mongoose";
import {Document} from "mongoose";
import IUser from "../interfaces/IUser";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})

const User = mongoose.model<IUser & Document>('User', userSchema);

export default User;
