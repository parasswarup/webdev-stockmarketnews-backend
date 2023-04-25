import NewsLikesSchema from "../mongooseSchema/news-likes.js";
import mongoose from "mongoose";

const NewsLikesModel = mongoose.model("news-likes", NewsLikesSchema);
export default NewsLikesModel;
