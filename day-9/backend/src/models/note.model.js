const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const noteModule = mongoose.model("mamas", noteSchema);

module.exports = noteModule;
