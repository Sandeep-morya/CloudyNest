const mongoose = require("mongoose");

/* here i am using types provided by Mongoose */
const { String, Number, Boolean, ObjectId } = mongoose.Schema.Types;

/*  Seller Model Fields
	- name
	- email
	= password
	- address
	- products
	- income
 */

const sellerSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		address: { type: String, required: true },
		gst: { type: String, required: true },
		products: [{ type: ObjectId, ref: "product", default: [] }],
		/* Extras */
		selleditems: [{ type: ObjectId, ref: "product", default: [] }],

		isPrime: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;
