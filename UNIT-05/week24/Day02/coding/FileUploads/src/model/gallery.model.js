
const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    picture: [{ type: String, required: true }],
    user_id: { type: Number, required: true }
})

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;

