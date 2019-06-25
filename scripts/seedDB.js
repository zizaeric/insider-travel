const mongoose = require("mongoose");
const db = require("../models");

// This file empties the feebacks collection and inserts the feebacks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/feedbackdb"
);

const feedbackSeed = [
  {
    name: "Tim",
    city: "New York, New York",
    info:
      "This app helped me plan my honeymoon at a reasonable price!",
    date: new Date(Date.now())
  }
  
];

db.Feedback
  .remove({})
  .then(() => db.Feedback.collection.insertMany(feedbackSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
