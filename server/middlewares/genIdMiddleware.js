require("dotenv").config();
const jwt = require("jsonwebtoken");

function genIdMiddleware(req, res, next) {
	const token = req.headers.authorization;
	try {
		if (!token) throw new Error("Please Provide the Token in Headers");
		const decoded = jwt.verify(token, process.env.SECERT);
		req.body.generatedID = decoded.id;
		next();
	} catch (error) {
		res.status(405).send(error);
	}
}

module.exports = genIdMiddleware;
