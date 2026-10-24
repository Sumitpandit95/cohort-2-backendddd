const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

async function connectTOdb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
}

module.exports = connectTOdb;
