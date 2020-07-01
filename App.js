require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes/viewWeather"));
app.use(require("./routes/savedWeather"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
