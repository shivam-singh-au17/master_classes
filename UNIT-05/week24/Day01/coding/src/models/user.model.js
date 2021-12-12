
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true }
});

const User = mongoose.model("user", userSchema);

module.exports = User;

