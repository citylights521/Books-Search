//

const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router
//root API route
  .route("/")
//shows all books in the API that meet the criteria
  .get(googleController.findAll);

//exports router code so that other files can reference
module.exports = router;
