import mongoose from "mongoose";
import NewsSchema from "../mongooseSchema/news.js"
const NewsModel = mongoose.model("news1", NewsSchema);
export default NewsModel;