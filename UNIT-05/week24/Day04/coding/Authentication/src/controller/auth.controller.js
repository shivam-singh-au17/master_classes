
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
require("dotenv").config();

const newToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
}


const signup = async (req, res) => {
    try {
        const user = await User.create(req.body);
        let token = newToken(user);
        return res.status(201).json({ data: { token } });
    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong" });
    }
}


const signin = async (req, res) => {

    //  we will find the user with the email address

    let user;
    try {
        user = await User.findOne({ email: req.body.email }).exec();
        if (!user)
            return res.status(401).json({
                status: "failed",
                message: "Your email or password is not correct",
            });

    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong01" });
    }

    // we will match the password the user has with the password stored in the system


    try {
        const match = await user.checkPassword(req.body.password);
        if (!match)
            return res.status(401).json({
                status: "failed",
                message: "Your email or password is not correct",
            });

    } catch (err) {
        return res.status(500).json({ status: "failed", message: "Something went wrong02" });
    }

    // create a new token and return it

    const token = newToken(user);
    return res.status(201).json({ data: { token } });
}


module.exports = { signup, signin }


