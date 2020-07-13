import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name : String,
    email : String,
    avatarUrl: String,
    facebookID: Number,
    githubID : Number,

});

const model = mongoose.model("User", UserSchema);
export default model;
