/* ye file ka mainly kaam hain server ko start karna 
or database ko connect karna  */
require("dotenv").config();
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = require("./src/app");

const connectdbms = require("./src/config/database");
connectdbms();
app.listen(3000, () => {
  console.log("finally server chal raha hain ");
});
