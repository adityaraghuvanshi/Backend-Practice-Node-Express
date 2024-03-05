var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/new-project-backend");

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
	},
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		},
	],
	dp: {
		type: "String",
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	fullname: {
		type: String,
		required: true,
	},
	secret: {
		type: String,
	},
});

module.exports = router;
module.exports = mongoose.model("User", userSchema);
