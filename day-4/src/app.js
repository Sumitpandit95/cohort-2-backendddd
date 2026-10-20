const express = require("express");
const app = express();
app.use(express.json());
const notes = [
  {
    tital: "description1",
    description: "test description 2",
    course: "btech",
    fees: 45000,
  },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

/* this is post notes*/
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);

  console.log(notes);

  res.send("hy  re sumitwa created sumit g");
});

/* get notes */
app.get("/notes", (req, res) => {
  res.send(notes);
});

/* delete  notes   params ka use karna  */

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.send("sumit g note deleted successfully");
});

/* patch method :/notes/index */
/* req.body ke andar data rahega ki kya data update karna hain  */

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  notes[req.params.index].title = req.body.title;
  res.send("note update successfully bhaiawa re ");
});

module.exports = app;
