
const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

const protect = require("../middlewares/protect")

router.get("/", protect, async (req, res) => {
    try {
        // const user = await User.find({}).select("-password").lean().exec();
        const user = await User.find({}).lean().exec();
        return res.status(200).json({ data: user });
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


module.exports = router;
