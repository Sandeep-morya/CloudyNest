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
		res.send(req.body);
	}),
);

module.exports = router;
