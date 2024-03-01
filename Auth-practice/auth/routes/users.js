var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/authpractice");

const userSchema = mongoose.Schema({
	username: String,
	password: String,
	secret: String,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

userSchema.plugin(plm);

module.exports = router;
module.exports = mongoose.model("user", userSchema);
