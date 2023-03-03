const express = require("express");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("hi");
});

router.post(
	"/register",
	asyncHandler(async (req, res) => {
		const { name, email, password } = req.body;
		const user = await new User({ name, email, password });

		const account = await user.save();
		res.send({ error: false, account });
	}),
);

/* Login */

router.post(
	"/login",
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email, password }).select("_id email");
		if (!user) res.status.send({ error: true, message: "User not found" });
		res.send({ error: false, user });
	}),
);

module.exports = router;
