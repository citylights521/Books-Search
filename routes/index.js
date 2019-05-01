//configures API and default routes on the back-end (index.html)

//brings in path
const path = require("path");
//brings in express
const router = require("express").Router();
//brings in api file
const apiRoutes = require("./api");

//use API route
router.use("/api", apiRoutes);

//sends API router to index.html
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

//exports router code so that other files can reference
module.exports = router;
