require("dotenv").config();
require("./config/connection")();

/* server setup file */
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/user", userRouter);

app.listen(process.env.PORT, () =>
	console.log("server in running on " + process.env.PORT),
);
