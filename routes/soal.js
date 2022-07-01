var express = require('express');
const shuffle = require('../helpers/shuffle');
var router = express.Router();

let benar = 0
let salah = 0

const question = {
  text: "Selain manusia, tumbuhan juga membutuhkan air antara lain untuk proses ….",
  options: ["Respirasi", "Fotosintesis", "Pengguguran", "Pelapukan"],
  answer: "Fotosintesis",
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  shuffle(question.options)
  res.render("soal", { question, benar, salah });
});

router.post('/answering', function(req, res, next) {
  const { ans } = req.body;
  console.log(ans);
  ans === question.answer ? benar++ : salah++;
  res.redirect("/soal");
});

module.exports = router;
