const express = require("express");
const asyncHandler = require("express-async-handler");
const genIdMiddleware = require("../middlewares/genIdMiddleware");
const Product = require("../models/productModel");
const Seller = require("../models/sellerModel");

const router = express.Router();

/* Middlewares */
router.use(genIdMiddleware);

/* get all Products*/

router.get(
	"/all",
	asyncHandler(async (req, res) => {
		const products = await Product.find();
		res.send(products);
	}),
);

/* get a particalar item */

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const _id = req.params.id;
		const product = await Product.findById({ _id });
		res.send(product);
	}),
);
router.get(
	"/seller/:id",
	asyncHandler(async (req, res) => {
		const _id = req.params.id;
		const product = await Seller.findOne({ _id }).select(
			"image name email address createdAt",
		);
		res.send(product);
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
