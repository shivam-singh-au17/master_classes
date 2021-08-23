
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    commentBody: { type: String, required: true },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;

