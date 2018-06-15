const express = require("express");
const bodyParser = require("body-parser");
const util = require("./utilities.js");

const app = express();
const port = 4000;

app.use(bodyParser.json());

// capture the date + number of days data
app.get("/:MM/:DD/:YYYY/:days", function(req, res) {
  console.log(req.params);
  res.end();
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
