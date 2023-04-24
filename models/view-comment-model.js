import ViewCommentSchema from "../mongooseSchema/view-comment.js";
import mongoose from "mongoose";
const ViewCommentModel = mongoose.model("view-comments", ViewCommentSchema);


export default ViewCommentModel;