//index.js configures routes on the back-end

//brings in path
const path = require("path");
//brings in express
const router = require("express").Router();
//brings in required books file
const bookRoutes = require("./books");
//brings in required google file
const googleRoutes = require("./google");

//use books route
router.use("/books", bookRoutes);

//use google route
router.use("/google", googleRoutes);

//exports router code so that other files can reference it
module.exports = router;
