import UserSchema from "../mongooseSchema/users.js";
import mongoose from "mongoose";
const UserModel = mongoose.model("users", UserSchema);


export default UserModel;
