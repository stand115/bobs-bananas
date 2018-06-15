const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const util = require("./utilities.js");

const app = express();
const port = 4000;

app.use(bodyParser.json());

// capture the date + number of days data
app.get("/:month/:day/:year/:span", function(req, res) {
  // format input for moment
  let startDate = moment(
    req.params.month + "/" + req.params.day + "/" + req.params.year,
    "MM/DD/YYYY"
  );

  for (let i = 0; i < req.params.span; i++) {
    console.log(
      moment(startDate)
        .add(i, "days")
        .format("MM/DD/YYYY")
    );
    console.log(
      moment(startDate)
        .add(i, "days")
        .format("dddd")
    );
  }
  res.end();
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
