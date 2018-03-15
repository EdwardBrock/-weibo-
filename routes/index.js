var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res)
  // res.send("<h1>welcome</h1>");
});

module.exports = router;
