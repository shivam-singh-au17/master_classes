
const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;

