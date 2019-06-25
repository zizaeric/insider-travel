const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  
  name: { type: String, required: true },
  city: { type: String, required: true },
  info: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
