//this code is our CRUD operations for the Mongo database
//used on the back-end

//brings models file into the database
const db = require("../models");

//exports for the CRUD operations
module.exports = {
//reads db, finds all books
  findAll: function(req, res) {
    //finds all books in the book database
    db.Book.find(req.query)
    // if a book is found, do this
      .then(dbBook => res.json(dbBook))
    // if a book is not found, show 422 error message
      .catch(err => res.status(422).json(err));
  },

//reads db, finds books by id
  findById: function(req, res) {
    //searches for specific book in the database by book id
    db.Book.findById(req.params.id)
    // if a book is found, do this
      .then(dbBook => res.json(dbBook))
      // if a book is not found, show 422 error message
      .catch(err => res.status(422).json(err));
  },

//creates new books in db
  create: function(req, res) {
    //creates new books in the book database
    db.Book.create(req.body)
    //if the book can be created:
      .then(dbBook => res.json(dbBook))
      // if a book cannot be created, show 422 error message
      .catch(err => res.status(422).json(err));
  },

//updates books in db
  update: function(req, res) {
    //finds a specific book in the database to update book information
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
    //if the book can be updated:
      .then(dbBook => res.json(dbBook))
      // if a book cannot be updated, show 422 error message
      .catch(err => res.status(422).json(err));
  },

//removes books in db
  remove: function(req, res) {
    //finds specific book in the book database by book id
    db.Book.findById(req.params.id)
    //remove book from book db
      .then(dbBook => dbBook.remove())
      //json object in the book db
      .then(dbBook => res.json(dbBook))
      // if a book cannot be found/removed, show 422 error message
      .catch(err => res.status(422).json(err));
  }
};
