const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../config/database");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/viewWeather", (req, res) => {
  let cityname = req.body.cityname;
  let temperature = req.body.temperature;
  let humidity = req.body.humidity;

  db("weathers")
    .insert({
      cityname: cityname,
      temperature: temperature,
      humidity: humidity,
    })
    .then(() => {
      res.status(200).json({ message: "weather submitted" });
    })
    .catch((err) => console.error(err));
});

router.delete("/viewWeather", (req, res) => {
  let id = req.body.id;
  db("weathers")
    .whereExists({ id: id })
    .del()
    .then(() => {
      res.status(200).json({ message: "weather instance deleted" });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
