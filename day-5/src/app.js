/* app.js ka kaam hota hain server ko create karna 
or server ko config karna  */
const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

/* poat method se ek API Create karenge isme jab data client site se server site pe bhejte hain   */
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    messege: "bhai note created succefully bro",
  });
});

/* GET get method ka use ham tab karte hain generaly ham server site se client site ke  liye use karte hain data ko fetch karne ke liye */

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes, // this for get data method
  });
});

/* for delete methid  */

app.delete("/notes/:mama", (req, res) => {
  delete notes[req.params.mama];
  res.status(204).json({
    messege: "bhai sachme note successfullmy ho chuka hain",
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].discription = req.body.discription;
  res.status(200).json({
    messege: "note updated madan",
  });
});

module.exports = app;
