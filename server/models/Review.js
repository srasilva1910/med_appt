const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  comment: String,
  date: String,
});

module.exports = mongoose.model("Review", ReviewSchema);