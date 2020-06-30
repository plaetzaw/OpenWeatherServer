const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/viewWeather"));
app.use(require("./routes/makeWeather"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
