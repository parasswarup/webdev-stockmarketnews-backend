import mongoose from "mongoose";

const ViewSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        title: String,
        userId: String,
        email: { type: String},
        firstName: String,
        lastName: String,
        age: Number,
        role: {
            type: String,
            default: "REGISTERED",
            enum: ["ADMIN", "REGISTERED"],
        },
        likes: Number,
        dislikes: Number,
        likedBy: [],
        dislikedBy: [],
        liked: Boolean,
        messageCount:Number,
        view: String,
        datePosted: Date,
        profilePhoto: String,
        comment: [{
            userId: String,
            message: String,
            likes: Number,
            dislikes: Number,
            username: String,
            profilePhoto: String,
            datePosted: {type: Date}
        }]

    },  {collection: 'views'});
export default ViewSchema;