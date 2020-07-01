const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const queries = require("../db/queries");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/viewWeather", (req, res) => {
  queries.getAll().then((weathers) => {
    res.json(weathers);
  });
});

module.exports = router;
