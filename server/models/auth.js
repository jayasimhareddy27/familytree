import mongoose from "mongoose";

const authSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  trees:{type:Array},
  selectedFile: String,
});

var user= mongoose.model("auth", authSchema);
export default user;