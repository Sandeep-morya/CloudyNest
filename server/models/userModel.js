const mongoose = require("mongoose");
const uniqueValidator = require("@ladjs/mongoose-unique-validator");

/* here i am using types provided by Mongoose */
const { String } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: String,
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("user", userSchema);

module.exports = User;
