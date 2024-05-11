import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    
    phone:{
        type: Number,
        required: true,
        unique: true
    }, 
    username:{
        type: String,
        required: true,
        unique: true
    }, 
     password:{
        type: String,
        required: true,
        unique: true
    } 
})

 
const user = mongoose.model("User", userSchema);

export default user
