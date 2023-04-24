import mongoose, {Schema} from "mongoose";

const ViewCommentSchema = new mongoose.Schema({
        user:{type:Schema.Types.ObjectId,ref:"users"},
        views:{type:Object,ref:"views"},
        comment:{type:String},
        date:{type:Date}},{collection: 'view-comments'})
export default ViewCommentSchema