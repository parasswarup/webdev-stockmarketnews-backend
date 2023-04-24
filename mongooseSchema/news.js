import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
                                           _id : {type:String, required:true},
                                           title: {type: String, required: true},
                                           description: String,
                                           image: String,
                                           source: String,
                                           time:String,
                                           symbol:String,
                                           company:String,
                                           industry:String,
                                           sentiment:Number

                                       }, {collection: 'news'});
export default NewsSchema