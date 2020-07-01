const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../config/database");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/savedWeather", (req, res) => {
  db.select("*")
    .from("weathers")
    .then((weathers) => {
      res.json(weathers);
    });
});

module.exports = router;
