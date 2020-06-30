const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let bcrypt = require("bcrypt");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
