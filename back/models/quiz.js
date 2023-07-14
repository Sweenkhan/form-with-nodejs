import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    Question: {
        type: String,
        required: true
    },
    Answer : {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    }
});


const ques = mongoose.model("Ques", questionSchema);

export default ques;
