var express = require("express");
var router = express.Router();
var userModel = require("./users");
var postModel = require("./posts");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/getAllUserPosts", async function(req,res){
	let user=await userModel.findOne({
		_id:"65cc543399489b25eaba3dd1"
	}).populate("posts");
	res.send(user)
})

router.get("/createUser", async function (req, res) {
	let userCreated = await userModel.create({
		username: "macleods",
		password: "macleods",
		posts: [],
		email: "macleods@company.com",
		fullname: "Macleods Pharmaceuticals",
	});

	res.send(userCreated);
});

router.get("/createPost", async function (req, res) {
	let createdPost = await postModel.create({
		postText: "Hello Hello",
		user: "65cc543399489b25eaba3dd1",
	});
	let user = await userModel.findOne({ _id: "65cc543399489b25eaba3dd1" });
	user.posts.push(createdPost._id);
	await user.save();
	res.send("done");
});

module.exports = router;
