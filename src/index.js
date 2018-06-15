const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const util = require("./utilities.js");

const app = express();
const port = 4000;

app.use(bodyParser.json());

// capture the date + number of days data
app.get("/:month/:day/:year/:span", function(req, res) {
  let totalCost = 0;
  // format input for moment
  let startDate = moment(
    req.params.month + "/" + req.params.day + "/" + req.params.year,
    "MM/DD/YYYY"
  );

  // set a comparison date to check if we're budgetting for dates in the past
  let now = new Date();
  now.setDate(now.getDate() - 1);

  // compare input date to now
  if (startDate < now) {
    res.status(400).json("Bob should not be budgeting for dates in the past..");
  } else {
    // iterate across all days in the span
    for (let i = 0; i < req.params.span; i++) {
      // check if the date is a weekday
      if (
        util.checkWorkDay(
          moment(startDate)
            .add(i, "days")
            .format("dddd")
        )
      ) {
        // if weekday is true, determine the price and add to the totalCost
        totalCost += util.determineBananaCost(
          moment(startDate)
            .add(i, "days")
            .format("MM/DD/YYYY")
        );
      }
    }
    // return the total cost from the request
    res.json(totalCost.toFixed(2));
  }
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

module.exports = app;
