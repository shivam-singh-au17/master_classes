
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    ip_address: String,
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    sku: { type: String, required: true, unique: true },
    pin_code: { type: String, required: true }
})

const User = mongoose.model("validator", userSchema);

module.exports = User;
