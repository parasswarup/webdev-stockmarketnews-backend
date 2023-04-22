import mongoose from "mongoose";

const ViewCommentSchema = new mongoose.Schema(
    {
        userId: String,
        viewId: String,
        message: String,
        likes: Number,
        dislikes: Number,
        username: String,
        profilePhoto: String,
        datePosted: {type: Date}
    },  {collection: 'ViewComment'});
export default ViewCommentSchema;