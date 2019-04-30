//brings in required files, path, and express
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//use books route
router.use("/books", bookRoutes);

//use google route
router.use("/google", googleRoutes);

//exports router code so that other files can reference it
module.exports = router;
