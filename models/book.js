//uses mongoose to create the db book schema on the back-end

//brings in mongoose (or else it won't work!)
const mongoose = require("mongoose");

//brings in mongoose schema 
const Schema = mongoose.Schema;

//creates book schema that includes book title, subtitle, authors, link, description, image, and the google book id for the db
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  //unique identifier from the google book API
  googleId: { type: String, required: true, unique: true }
});

//creates the book variable so that it can be exported
const Book = mongoose.model("Book", bookSchema);

//exports the book variable/code so that other files can reference it
module.exports = Book;
