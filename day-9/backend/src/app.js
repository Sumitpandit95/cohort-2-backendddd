/* app ka main kaam hain server create karna  */

const express = require("express");
const noteModel = require("./models/note.model");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
/*
-post/api/notes 
create new node and save data in mongodb
req.res = {title,description}  */

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({ message: "note created ho chuka hain", note });
});

/* ltes create get api to get all the data from mongodb and send them in the response
 */

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "notes fatched sucessfuly**",
    notes,
  });
});

/*  now will create a delete note /api/notes */

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted sachem sucessfully",
  });
});

/*  patch api banate hain 
patch se only specific thing update karte hain like koi title and description 

/api/notes/:id

-re.body = {description}
*/

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "description changed sucessfully",
  });
});

console.log(__dirname);

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});
module.exports = app;
