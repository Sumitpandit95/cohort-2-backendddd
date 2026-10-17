const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const { log } = require("node:console");
const app = require("./src/app");
const mongoose = require("mongoose");
function cntdbms() {
  mongoose
    .connect(
      "mongodb+srv://sumit952675_db_user:sumit12345678@cluster0.41oqjtb.mongodb.net/day-6",
    )
    .then(() => {
      console.log("dbms connect ho gaya hain so not to warry");
    });
}

cntdbms();
app.listen(3000, () => {
  console.log("server chal raha hain 3000 pe ");
});
