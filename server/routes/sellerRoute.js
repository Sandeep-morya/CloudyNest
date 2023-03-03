require("dotenv").config();
const express = require("express");
const Seller = require("../models/sellerModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/* middleware */

router.use(authMiddleware);

/* Register */

router.post(
	"/register",
	asyncHandler(async (req, res) => {
		const { name, email, password, address } = req.body;

		const hasedPassword = await bcrypt.hash(String(password), 5);

		const seller = await new Seller({
			name,
			email,
			password: hasedPassword,
			address,
		});

		const { _id } = await seller.save();

		const token = jwt.sign({ id: _id }, process.env.SECERT, {
			expiresIn: "30d",
		});
		res.send({ error: false, token });
	}),
);

/* Login */

router.post(
	"/login",
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const seller = await Seller.findOne({ email });
		if (!seller) throw new Error("Seller not Found");
		/* else */

		const auth = await bcrypt.compare(String(password), seller.password);

		if (!auth) throw new Error("Seller Authorization failed");

		const token = jwt.sign({ id: seller._id }, process.env.SECERT, {
			expiresIn: "30d",
		});
		res.send({ error: false, token });
	}),
);

/*  Find Seller Profile */

router.get(
	"/profile",
	asyncHandler(async (req, res) => {
		const { _id } = req.body;
		const seller = await Seller.findById({ _id }).select("-password");
		if (!seller) throw new Error("Seller Not Found");
		res.send(seller);
	}),
);

/* add additonal details */

router.patch(
	"/addMore",
	asyncHandler(async (req, res) => {
		const { _id } = req.body;
		const seller = await Seller.findOneAndUpdate({ _id }, req.body, {
			returnOriginal: false,
		}).select("-password");
		if (!seller) throw new Error("Seller Not Found");
		res.send(seller);
	}),
);

module.exports = router;
