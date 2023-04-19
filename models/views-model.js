import ViewSchema from "../mongooseSchema/views.js";
import mongoose from "mongoose";
const ViewModel = mongoose.model("views", ViewSchema);


export default ViewModel;