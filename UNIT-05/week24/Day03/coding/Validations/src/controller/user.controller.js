

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../model/user.model");


router.post("/",


    body("id").isLength({ min: 1 }).withMessage("id is required"),


    body("first_name").isLength({ min: 1 }).withMessage("first_name is required"),


    body("last_name").isLength({ min: 1 }).withMessage("last_name is required"),


    body("email").isEmail().withMessage("email is required and must be a valid email address"),


    body("gender").isLength({ min: 4, max: 6 }).withMessage("gender is required ant must be male, female or other length"),


    body("ip_address").isLength({ min: 8 }).withMessage("ip_address is required"),


    body("age").isLength({ min: 1 , max: 3 }).withMessage("age is required"),

    body("price").notEmpty().custom((value) => {
        if (value <= 0) throw new Error("Product cannot be free");
        return true
    }),

    body("sku").notEmpty()
        .custom(async (value, { req }) => {
            const product = await User.findOne({ sku: value, price: req.body.price }).lean().exec();
            if (product) throw new Error("Product already exists");
            return true
        }),

    body("pin_code").isLength({ min: 6, max: 6 }).withMessage("6 Digit pin code required"),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ data: errors.array() })
            }
            const user = await User.create(req.body);
            return res.status(201).json({ data: user })
        } catch (err) {
            return res.status(500).send(err.message);
        }
    })


router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send({ data: user });
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


module.exports = router;

