﻿require("dotenv").config();
require("./config/connection")();

/* imports */
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const sellerRouter = require("./routes/sellerRoute")

/* 😂 more variables */
const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/user", userRouter);
app.use("/seller", sellerRouter);

app.listen(process.env.PORT, () =>
	console.log("server in running on " + process.env.PORT),
);
