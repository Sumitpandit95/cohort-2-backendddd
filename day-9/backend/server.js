/* 
mainly server fileka 2 kaam hota hain 
server ko chalana 
or database ko connect karna 
 */

const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();
const app = require("./src/app");
const connectTOdb = require("./src/config/database");
connectTOdb();

app.listen(3000, () => {
  console.log("server is running smoothly  sachme");
});
