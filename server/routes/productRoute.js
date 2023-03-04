const express = require("express");
const asyncHandler = require("express-async-handler");
const genIdMiddleware = require("../middlewares/genIdMiddleware");
const Product = require("../models/productModel");

const router = express.Router();

/* Middlewares */
router.use(genIdMiddleware);

/* get Cart Items */

router.get(
	"/all",
	asyncHandler(async (req, res) => {
		const products = await Product.find();
		res.send(products);
	}),
);

/* add new product */

router.post(
	"/add",
	asyncHandler(async (req, res) => {
		const seller = req.body.generatedID;
		const product = new Product({ ...req.body, seller });
		const data = await product.save();
		res.send(data);
	}),
);

/* update a product */

router.patch(
	"/:id",
	asyncHandler(async (req, res) => {
		const _id = req.params.id;
		const data = await Product.findOneAndUpdate({ _id }, req.body, {
			returnOriginal: false,
		});
		res.send(data);
	}),
);

/* delete a product */

router.delete(
	"/:id",
	asyncHandler(async (req, res) => {
		const _id = req.params.id;
		const data = await Product.findOneAndDelete({
			_id,
			seller: req.body.seller,
		});
		res.send(data);
	}),
);

module.exports = router;
