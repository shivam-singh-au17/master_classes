
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    prod_Name: { type: String, required: true },
    prod_Price: { type: Number, required: true },
    prod_Coteg: { type: String, required: true }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product


