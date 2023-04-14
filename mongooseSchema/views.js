import mongoose from "mongoose";

const ViewSchema = new mongoose.Schema(
    {
        _id : {type:String, required:true},
        username: { type: String, required: true },

        email: { type: String, required: true},
        firstName: String,
        lastName: String,
        age: Number,
        role: {
            type: String,
            default: "REGISTERED",
            enum: ["ADMIN", "REGISTERED"],
        },
        likes: Number,
        liked: Boolean,
        messageCount:Number,
        view: String,
        datePosted: Date
    },  {collection: 'views'});
export default ViewSchema;