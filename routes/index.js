//brings in api file, path, and express
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//use API route
router.use("/api", apiRoutes);

//sends API router to index.html
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

//exports router code so that other files can reference
module.exports = router;
