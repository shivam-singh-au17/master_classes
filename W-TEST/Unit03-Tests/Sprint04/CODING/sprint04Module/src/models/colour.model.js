

const mongoose = require("mongoose");

const colourSchema = new mongoose.Schema({
    colourName: { type: String, required: true },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

const Colour = mongoose.model("colour", colourSchema);

module.exports = Colour


