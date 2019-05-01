//google.js is back-end API routes for front-end google books search operations

//require express
const router = require("express").Router();
//brings in contollers/googleController file for CRUD operations
const googleController = require("../../controllers/googleController");

router
//root API route
  .route("/")
//shows all books in the API that meet the criteria
  .get(googleController.findAll);

//exports router code so that other files can reference
module.exports = router;
