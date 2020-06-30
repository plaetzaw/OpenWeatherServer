const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
let bcrypt = require("bcrypt");
const Knex = require("knex");
let SALT = 22;

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", (req, res) => {
  res.send("register");
});

router.post("/register", (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  Knex("users")
    .findOne({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (user) {
        console.log("email already exists");
        res.status(500).json({ message: "Email already exists" });
      } else {
        Knex("users")
          .findOne({
            where: {
              email: email,
            },
          })
          .then((user2) => {
            console.log("looking for email...");
            if (user2) {
              console.log("email already exists");
              res.status(500).json({ message: "email already exists" });
            } else {
              bcrypt.hash(password, SALT).then((hash) => {
                console.log("hashing password....");
                let user = Knex("users").build({
                  username: username,
                  email: email,
                  password: hash,
                });

                user
                  .save()
                  .then(() =>
                    res.status(200).json({ message: "New user created!" })
                  )
                  .catch((err) => console.error(err));
              });
            }
          });
      }
    });
});

module.exports = router;
