require("dotenv").config();

const app = require("./src/app");
const connectTOdb = require("./src/config/database");

async function startServer() {
  try {
    await connectTOdb();

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
