var express = require("express");
var router = express.Router();

router.use(express.static("../public"));

router.use("/user-profile", (req, res, next) => {
	console.log("User profile page");
	next();
});
router.use("/user-profile/:username", (req, res, next) => {
	console.log(`User profile page of ${req.params.username}`);
	next();
});
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mac" });
});
router.get("/user-profile", (req, res) => {
	res.send("This is user profile page.");
});
router.get("/user-profile/:username", (req, res) => {
	res.render("user-profile", { profilename: `${req.params.username}` });
});
module.exports = router;
