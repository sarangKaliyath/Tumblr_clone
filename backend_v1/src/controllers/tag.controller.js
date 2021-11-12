const express = require("express");
const router = express.Router();

const Tag = require("../models/tags.model");
const authanticate = require("../middleware/authanticate");

router.get("/", authanticate, async function (req, res) {
    const tag = await Tag.find().select().lean().exec();
    res.status(200).json({tag: tag});
});

router.post("/", authanticate, async function (req, res) {
    const tag = await Tag.create(req.body);
    res.status(200).json({tag: tag});
});

module.exports = router;