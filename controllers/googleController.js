//this code is for the google books API call
//used on the back-end

//brings in axios so that the API call can be made
const axios = require("axios");

//brings in the models file so that the code can be referenced
const db = require("../models");

//exports the axios API call to google books
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
  //gets book results for those books that have title, info, authors, description, image, and link data
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
  //filters out any book results that are already being stored in the db
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
  //renders the book result as a json object
      .then(books => res.json(books))
  //.catch is used if there is an error, in this case it creates a 422 error
      .catch(err => res.status(422).json(err));
  }
};
