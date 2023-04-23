import NewsCommentsSchema from "../mongooseSchema/news-comments.js";
import mongoose from "mongoose";
const NewsCommentsModel = mongoose.model("news-comments", NewsCommentsSchema);
export default NewsCommentsModel;
