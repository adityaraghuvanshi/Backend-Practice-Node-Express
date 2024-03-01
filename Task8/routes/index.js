import { Router } from "express";
var router = Router();
import { use, authenticate } from "passport";
import localStrategy from "passport-local";
import { authenticate as _authenticate, find } from "./users";

use(new localStrategy(_authenticate()));

router.get("/", function (_req, res, _next) {
	res.render("index");
});

router.post("/register", async function (req, res) {

	// Save user data to the database

	// Authenticate the user
	authenticate("local")(req, res, function () {
		res.redirect("/");
	});
});

router.get("/accountDetails", async function (_req, res) {
	const users = await find();
	res.render("accountDetails", { users });
});

export default router;
