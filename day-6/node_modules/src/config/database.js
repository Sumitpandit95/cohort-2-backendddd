const mongoose = require("mongoose");

function connectdbms() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("ye bhi dbms bindass connect ho chuka hain ");
  });
}

module.exports = connectdbms;
