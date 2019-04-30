//require express (or else it won't work!)
const express = require("express");

//require mongoose (or else it won't work!)
const mongoose = require("mongoose");
//require routes file
const routes = require("./routes");
const app = express();
//set local port
const PORT = process.env.PORT || 3001;

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//if node environment is production, use client/build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//tells server.js to use imported routes
app.use(routes);

//connects Mongoose to google books API
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

//connects to server to the port
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
