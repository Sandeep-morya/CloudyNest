require("dotenv").config();
const express = require("express");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middlewares/authMiddleware");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");

const router = express.Router();

/* Middleware */
router.use(authMiddleware);

/* Register */

router.post(
	"/register",
	asyncHandler(async (req, res) => {
		const { name, email, password } = req.body;

		const hasedPassword = await bcrypt.hash(String(password), 5);

		const user = await new User({ name, email, password: hasedPassword });

		const { _id } = await user.save();

		const cart = await new Cart({_id });
		cart.save();

		const token = jwt.sign({ id: _id }, process.env.SECERT, {
			expiresIn: "7d",
		});
		res.send({ error: false, token });
	}),
);

/* Login */

router.post(
	"/login",
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) throw new Error("User not Found");
		/* else */

		const auth = await bcrypt.compare(String(password), user.password);

		if (!auth) throw new Error("User Authorization failed");

		const token = jwt.sign({ id: user._id }, process.env.SECERT, {
			expiresIn: "7d",
		});
		res.send({ error: false, token });
	}),
);

/*  Find User Profile */
router.get(
	"/profile",
	asyncHandler(async (req, res) => {
		const { _id } = req.body;
		const user = await User.findById({ _id }).select("-password");
		if (!user) throw new Error("User Not Found");
		res.send(user);
	}),
);

/* find orders of User */

router.get(
	"/orders",
	asyncHandler(async (req, res) => {
		const { _id } = req.body;
		const orders = await Order.find({ customer: _id });
		res.send(orders);
	}),
);

/* add additonal details */

router.patch(
	"/addmore",
	asyncHandler(async (req, res) => {
		const { _id } = req.body;
		const user = await User.findOneAndUpdate({ _id }, req.body, {
			returnOriginal: false,
		}).select("-password");
		if (!user) throw new Error("User Not Found");
		res.send(user);
	}),
);



module.exports = router;
