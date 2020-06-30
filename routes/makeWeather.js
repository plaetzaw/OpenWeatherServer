const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/makeWeather", (req, res) => {
  res.send("Make your weathers");
});

module.exports = router;
