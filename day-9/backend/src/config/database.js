const mongoose = require("mongoose");

function connectTOdb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
      process.exit(1);
    });
}

module.exports = connectTOdb;
