var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	req.flash("age", 24);
	res.send("Check age page");
});
router.get("/age", function (req, res, next) {
	console.log(req.flash("age"));
});

module.exports = router;
