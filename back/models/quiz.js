import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});


const Question = mongoose.model("Question", questionSchema);

export default Question;
