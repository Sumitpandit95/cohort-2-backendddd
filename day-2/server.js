const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world kya re sumitwa kya kar raha hain");
});

app.get("/nurma", (req, res) => {
  res.send("khel khatam beta");
});

app.get("/dom", (req, res) => {
  res.send("tu dom hai re sala");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
