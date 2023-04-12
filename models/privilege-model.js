import PrivilegeSchema from "../mongooseSchema/privilege.js";
import mongoose from "mongoose";
const PrivilegeModel = mongoose.model("privilege", PrivilegeSchema);
export default PrivilegeModel;