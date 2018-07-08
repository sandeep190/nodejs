var express = require('express');
var router = express.Router();

var multer = require('multer');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
});

module.exports = router;
