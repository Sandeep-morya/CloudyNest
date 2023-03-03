const mongoose = require("mongoose");

/* here i am using types provided by Mongoose */
const { String, Number, Boolean, ObjectId } = mongoose.Schema.Types;

/*  Product Model Fields
	- title
	- description
	= thumbnail
	- images
	- price
	- tags
	- quantity
	- seller
	- assured
	- rating
 */

const productSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		brand: { type: String, required: true },
		description: { type: String, required: true },
		thumbnail: { type: String, required: true },
		images: [{ type: String, required: true }],
		price: { type: Number, required: true },
		tags: [{ type: String, required: true }],
		quantity: { type: Number, default: 1 },
		discount: { type: Number, default: 0 },
		seller: { type: ObjectId, ref: "seller" },

		/* Extras */
		assured: { type: Boolean, default: false },
		rating: { type: Number, default: 7 },
		features: [{ type: String, default: [] }],
	},
	{ timestamps: true },
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
