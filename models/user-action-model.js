import UserActionSchema from "../mongooseSchema/user-action.js";
import mongoose from "mongoose";
const UserActionModel = mongoose.model("userAction", UserActionSchema);


export default UserActionModel;
