const mongoose = require("mongoose");

/* here i am using types provided by Mongoose */
const { String, Boolean } = mongoose.Schema.Types;

/*  User Model Fields
	- name
	- email
	= password
	- address
	- pending
	- completed
 */

const userSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		address: [{ type: String, default: [] }],
		isPrime: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

const User = mongoose.model("user", userSchema);

module.exports = User;
