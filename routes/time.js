var express = require("express");
var router = express.Router();

const cyd = (date) => {
  let newDate = date;
  newDate.setDate(date.getDate() - 1);

  return { st: date, et: newDate };
};

let initDate = new Date();
let theDate = cyd(initDate);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("time", { st: theDate.st, et: theDate.et });
});

router.post("/get-time", function (req, res, next) {
  initDate = new Date();
  theDate = cyd(initDate);
  res.redirect("/time");
});

module.exports = router;
