const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../config/database");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/viewWeather", (req, res) => {
  let cityname = req.body.cityname;
  console.log(cityname);
  let temperature = req.body.temperature;
  console.log(temperature);
  let humidity = req.body.humidity;
  console.log(humidity);
  let date = req.body.date;
  console.log(date);

  db("weathers")
    .insert({
      cityname: cityname,
      temperature: temperature,
      humidity: humidity,
      date: date,
    })
    .then(() => {
      res.status(200).json({ message: "weather submitted" });
    })
    .catch((err) => console.error(err));
});
// router.post("/deleteWeather", (req, res) => {
//   let id = req.body.id;
//   db("weathers")
//     // .select(id)
//     .where({ id: id })
//     .del()
//     .then(() => {
//       res.status(200).json({ message: "weather instance deleted" });
//     })
//     .catch((err) => console.error(err));
// });

module.exports = router;
