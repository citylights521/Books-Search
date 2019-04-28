const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Require all models
var db = require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI);

// Define API routes here
app.post("/searchBook", function(req, res) {
  res.json(" ");
});

//saves book to mongoDB
app.post("/saveBook/:id", function(req, res) {
var book = {};
var googleBookID = req.param.id;

//call googlebooks API with book id
//use book data to fill in the book object above
  db.Book.create(book)
  .then(function(dbBook) {
    return res.json(dbBook);
  }).catch(function(err) {
    console.log(err);
    res.json(err);
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
 db.Book.find({}).then(function (books) {
   console.log(books);
   return res.json(books);
 }).catch(function (err) {
   console.log(err);
   return res.json(err);
 })
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
