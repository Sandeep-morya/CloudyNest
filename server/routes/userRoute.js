const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("hi");
});

module.exports = router;
