var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
// router.use("/createUser", function (req, res, next) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("User Created Successfully");
// 	}
// });

router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});
router.get("/user",async function(req,res){
  const user=await userModel.findOne({
    username: "Macleods"
  })
  res.render("users",{user})
})
router.get("/createUser", async function (req, res) {
	try {
		const existingUser = await userModel.findOne({ username: "Macleods" });
		if (existingUser) {
			return res.status(409).json({ error: "User Already Exists" });
		}
		let createdUser = await userModel.create({
			username: "Macs",
			password: "macPharma",
			posts: [],
			email: "mawsdfca@mail.com",
			fullname: "Macleadfgods Pharmaceuticals",
		});
		console.log(createdUser);
		res.status(201).json(createdUser);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/showUser", async function (req, res) {
	let showUser = await userModel.find();
	return res.json(showUser);
});

module.exports = router;
