const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware to read JSON request bodies

app.use(express.json());
app.use(cookieParser());
// Authentication routes
app.use("/api/auth", authRouter);

module.exports = app;
