
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image_url: [{type: String, required: true}],
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;


