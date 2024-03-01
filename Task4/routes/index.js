var express = require("express");
var router = express();
let userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
	res.render("index", { title: "macleods" });
});

router.get("/create", async function (req, res) {
	let createdUsersDB = await userModel.create(
		{
			companyCode: "001",
			company: "Macleods",
			diseaseCovered: ["Skin", "Cough", "Cold", "Body-Pain"],
			dateStarted: 1989 - 1 - 1,
			location: "Mumbai",
		},
		{
			companyCode: "002",
			company: "Cipla",
			diseaseCovered: ["Cough", "Cold"],
			dateStarted: 1999 - 1 - 1,
			location: "USA",
		},
		{
			companyCode: "003",
			company: "Glenmark",
			diseaseCovered: ["Skin", "Cold", "Body-Pain"],
			dateStarted: new Date("1990-01-01"),
			location: "Europe",
		},
		{
			companyCode: "004",
			company: "Mankind",
			diseaseCovered: ["Skin", "Cough"],
			dateStarted: 1995 - 1 - 1,
			location: "UK",
		},
	);
	res.send(createdUsersDB);
});

router.get("/find", async function (req, res) {
	let findUser = await userModel.findOne({ location: "UK" });
	res.send(findUser)
});

module.exports = router;
