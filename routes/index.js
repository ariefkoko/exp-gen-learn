var express = require("express");
var router = express.Router();

let counter = 0;
let comments = [];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { comments, counter });
});

/* POST increase counter by 1. */
router.post("/increase-counter", function (req, res, next) {
  counter += 1;
  res.redirect("/");
});

/* POST add comment */
router.post("/add-comment", function (req, res, next) {
  const { nama, text } = req.body;
  comments.splice(0, 0, { nama, text, date: new Date() });
  res.redirect("/");
});

module.exports = router;
