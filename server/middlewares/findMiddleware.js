const Cart = require("../models/cartModel");

async function findMiddleware(req, _, next) {
	const { _id } = req.body;
	const { items } = await Cart.findById({ _id });
	req.body.items = items;
	next();
}

module.exports = findMiddleware;
