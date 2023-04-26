import ViewLikesSchema from "../mongooseSchema/view-likes.js";
import mongoose from "mongoose";
const ViewLikesModel = mongoose.model("view-likes", ViewLikesSchema);
export default ViewLikesModel;