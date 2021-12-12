
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true},
        user: { type: String, required: true, minlength: 8 },
    }
)

const Post = mongoose.model("authorization", postSchema);

module.exports = Post;

