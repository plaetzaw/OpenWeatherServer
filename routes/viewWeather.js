const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
