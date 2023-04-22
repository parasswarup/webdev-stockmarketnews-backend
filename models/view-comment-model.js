import ViewCommentSchema from "../mongooseSchema/view-comment.js";
import mongoose from "mongoose";
const ViewCommentModel = mongoose.model("views", ViewCommentSchema);


export default ViewCommentModel;