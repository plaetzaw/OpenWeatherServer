const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require("../config/database");

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/deleteWeather", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  let id = req.body.id;
  console.log(id);
  db("weathers")
    .where({ id: id })
    .del()
    .then(() => {
      res.status(200).json({ message: "weather instance deleted" });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
