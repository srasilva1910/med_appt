const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  filename: String,
  filepath: String,
  date: {
    type: Date,
    default: Date.now,
  },
  isGlobal: {
  type: Boolean,
  default: false,
}
});


module.exports = mongoose.model("Report", ReportSchema);