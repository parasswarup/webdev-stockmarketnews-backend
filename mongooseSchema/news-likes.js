import mongoose,{Schema} from "mongoose"

const NewsLikesSchema = new mongoose.Schema({
                                                   user:{type:Schema.Types.ObjectId,ref:"users"},
                                                   news:{type:Object,ref:"news"},
                                                   like:{type:Boolean,default:false},
                                                   date:{type:Date}},{collection: 'news-likes'})
export default NewsLikesSchema