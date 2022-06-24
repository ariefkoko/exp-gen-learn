var express = require("express");
var router = express.Router();

let comments = [];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { comments });
});

/* POST increase counter by 1. */
router.post("/add-comment", function (req, res, next) {
  const { nama, text } = req.body;
  comments.splice(0, 0, { nama, text, date: new Date() });
  console.log(comments);
  res.redirect("/");
});

module.exports = router;
