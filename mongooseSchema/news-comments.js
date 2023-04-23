import mongoose,{Schema} from "mongoose"

const NewsCommentsSchema = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:"users"},
    news:{type:String},
    comment:{type:String},
    date:{type:Date}},{collection: 'news-comments'})

export default NewsCommentsSchema