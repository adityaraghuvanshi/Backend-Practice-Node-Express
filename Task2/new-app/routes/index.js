var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
	req.session.ban = true;
	res.send("Home");
});
router.get("/checkBan", function (req, res) {
	res.send("Check Console");
	console.log(req.session);
});

module.exports = router;
