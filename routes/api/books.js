//books.js is back-end API routes for the front-end book operations

//API routes to the book controller for CRUD operations
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//default route  
router.route("/")
//.get route returns all books in the db
  .get(bookController.findAll)
//.post is used to save a new book
  .post(bookController.create);

//id routes
router
  .route("/:id")
//.get route returns specific book by its google id
  .get(bookController.findById)
//.put route updates saved book to the db
  .put(bookController.update)
//.delete route removes a book from the db
  .delete(bookController.remove);

//exports router code so that other files can reference it
module.exports = router;
