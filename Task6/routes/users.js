var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/formhandling");

const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
	},
});

userSchema.plugin(plm);

module.exports = router;

module.exports = mongoose.model("User", userSchema);
