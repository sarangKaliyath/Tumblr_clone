const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const authanticate = require("../middleware/authanticate");
const  authorize  = require("../middleware/authorize");

router.get("/", authanticate, authorize(["admin", "seller"]), async function (req, res) {
   
    const user = await User.find({}).select("-password").lean().exec();
    res.status(200).json({data: user});
});


module.exports = router;