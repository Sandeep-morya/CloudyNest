const mongoose = require("mongoose");

/* here i am using types provided by Mongoose */
const { String, Number, Boolean, ObjectId } = mongoose.Schema.Types;

/*  Product Model Fields
	- title
	- description
	= thumbnail
	- images
	- price
	- assured
	- rating
 */

const productSchema = mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	thumbnail: { type: String, required: true },
	images: [{ type: String, required: true }],
	price: { type: Number, required: true },
	seller: { type: ObjectId, ref: "seller" },
	tags: [{ type: String, required }],
	discount: { type: Number, default: 0 },

	/* Extras */
	assured: { type: Boolean, default: false },
	rating: { type: Number, default: 7 },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
