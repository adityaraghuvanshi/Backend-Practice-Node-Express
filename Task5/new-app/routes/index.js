var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  req.session.ban=true;
  res.send("User ban request");
});
router.get('/checkBan', function(req, res) {
  res.send(req.session);
});

module.exports = router;
