const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();

/* middleware */

router.use((req,res,next)=>{
    
})

router.get(
	"/",
	asyncHandler(async (req, res) => {
        const _id = req.headers.userID

    }),
);
