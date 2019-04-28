var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },

    // `authors` is an object that stores a authors id
  // The ref property links the ObjectId to the authors model
  // This allows us to populate the Book with an associated authors
  authors: [{
    type: String
  }],

  //'description' is required and a type of string
  description: {
      type: String,
      required: true
  },

  img: {
    type: String,
    required: true
  },

  // `url` is required and of type String
  link: {
    type: String,
    required: true,
    unique: true
  },

  googleBookID: {
      type: Number,
      required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;
