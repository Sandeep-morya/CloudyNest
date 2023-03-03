require("dotenv").config();
require("./config/connection")();

/* imports */
const express = require("express");
const cors = require("cors");

/* routes import */
const userRouter = require("./routes/userRoute");
const sellerRouter = require("./routes/sellerRoute");
const cartRouter = require("./routes/cartRoute");
const productRouter = require("./routes/productRoute");

/* 😂 more variables */
const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use("/cart", cartRouter);
app.use("/product",productRouter)

app.listen(process.env.PORT, () =>
	console.log("server in running on " + process.env.PORT),
);
