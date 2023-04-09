/**
 * @file Defines mongoose schema for documents in the users collection
 */
import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//                                            username : {type:String, required:true},
//                                            password: {type: String, required: true},
//                                            firstName: String,
//                                            lastName: String,
//                                            email: String,
//                                            profilePhoto: {type: String, default: "https://lh3.googleusercontent.com/a-/AOh14GjQfPMc4NY3II6wMKkbk9f3q13JDHVZAt2QqLM1=s96-c"},
//                                            headerImage: String,
//                                            accountType: {type: String, default: 'PERSONAL', enum: ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL']},
//                                            maritalStatus: {type: String, default: 'SINGLE', enum: ['MARRIED', 'SINGLE', 'WIDOWED']},
//                                            biography: String,
//                                            dateOfBirth: Date,
//                                            role: {type: String, default: 'NORMAL', enum: ['ADMIN', 'NORMAL']},
//                                            joined: {type: Date, default: Date.now},
//                                        }, {collection: 'users'});
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true},
        firstName: String,
        lastName: String,
        age: Number,
        role: {
            type: String,
            default: "REGISTERED",
            enum: ["ADMIN", "REGISTERED"],
        }
    },  {collection: 'users'}  );
export default UserSchema;
