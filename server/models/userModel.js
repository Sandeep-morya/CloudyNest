const mongoose = require("mongoose");

/* here i am using types provided by Mongoose */
const { String, Boolean } = mongoose.Schema.Types;

/*  User Model Fields
	- name
	- email
	= password
	- address
	- isPrime
	- pending
	- completed
 */

const userSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		address: [{ type: String, default: [] }],

		/* Extras */
		isPrime: { type: Boolean, default: false },
		pendingOrders: [{ type: ObjectId, ref: "product", default: [] }],
		completedOrders: [{ type: ObjectId, ref: "product", default: [] }],
	},
	{ timestamps: true },
);

const User = mongoose.model("user", userSchema);

module.exports = User;
