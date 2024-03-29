var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newDB");
const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},

	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	cityPincode: {
		type: Number,
	},
	designation: {
		type: String,
	},
});

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

userSchema.plugin(plm);

module.exports = router;
module.exports = mongoose.model("User", userSchema);
