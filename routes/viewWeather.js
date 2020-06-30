const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/viewWeather", (req, res) => {
  res.send("Weather Posts");
});

module.exports = router;
