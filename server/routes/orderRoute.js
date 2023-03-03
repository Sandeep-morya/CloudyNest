require("dotenv").config();
const express = require("express");
const asyncHandler = require("express-async-handler");
const genIdMiddleware = require("../middlewares/genIdMiddleware");
const Order = require("../models/orderModel");

const router = express.Router();

/* Middleware */
router.use(genIdMiddleware);

/* make an order */

router.post(
	"/",
	asyncHandler(async (req, res) => {
		const customer = req.body.generatedID;
		const order = new Order({ ...req.body, customer });
		res.send({ message: "order Placed", order });
	}),
);

/* update order */

router.patch(
	"/:id",
	asyncHandler(async (req, res) => {
		const _id = req.params.id;
		const data = await Order.findOneAndUpdate({ _id }, req.body, {
			returnOriginal: false,
		});
		res.send(data);
	}),
);

module.exports = router;
