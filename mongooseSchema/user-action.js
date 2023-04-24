/**
 * @file Defines mongoose schema for documents in the users collection
 */
import mongoose, {Schema} from "mongoose";

const UserActionSchema = new mongoose.Schema(
    {
        userId: String,
        username: { type: String },
        role: {
            type: String,
            default: "REGISTERED",
            enum: ["ADMIN", "REGISTERED"],
        },
        //likedNews: [{newsId: { type: Schema.Types.ObjectId, ref: "news"}, dateLiked: Date}],
        likedNews: [{newsId: String, dateLiked: Date}],
        likedView: [{viewId: String, dateLiked: Date}],
        postedView: [{viewId: String, datePosted: Date}],
    },  {collection: 'userAction'}  );
export default UserActionSchema;
