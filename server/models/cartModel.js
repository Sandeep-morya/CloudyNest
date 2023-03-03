const mongoose = require("mongoose");

/* here i am using types provided by Mongoose */
const { String, Number, Boolean, ObjectId } = mongoose.Schema.Types;

/*  Cart Model Fields
	- userID
	- items

 */

const cartSchema = mongoose.Schema({
	_id: { type: ObjectId, required: true },
	items: [{ type: ObjectId, ref: "product", default: [] }],

});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
