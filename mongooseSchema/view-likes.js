import mongoose,{Schema} from "mongoose"

const ViewLikesSchema = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:"users"},
    news:{type:Object,ref:"news"},
    date:{type:Date}},{collection: 'view-likes'})
export default ViewLikesSchema