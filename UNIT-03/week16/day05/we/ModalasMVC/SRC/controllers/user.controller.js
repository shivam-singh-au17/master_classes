
const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");


const crudController = require("./crud.controller");

router.post("/", crudController(User).post)
router.get("/", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User).patchOne);
router.delete("/:id", crudController(User, "user").deleteOne);


router.get("/:id/posts", async function (req, res) {
    const userPost = await Post.find({ userId: req.params.id }).lean().exec()
    const user = await User.findById(req.params.id)
    return res.status(200).json({ posts: userPost, user: user })
})


router.get("/:id/posts", async function (req, res) {
    const userPosts = await Post.find({ userId: req.params.id }).lean().exec()
    let userPostsWithComments = {};
    userPosts.forEach(async post => {
        const postId = post._id;
        const comment = await getUserPostsWithComments(post);
        userPostsWithComments[postId] = {};
        userPostsWithComments[postId]["post"] = post;
        userPostsWithComments[postId]["comments"] = comment;
    })
    const user = await User.findById(req.params.id)
    return res.status(200).json({ postsWithComments: userPostsWithComments, user: user })
})
async function getUserPostsWithComments(post) {
    const comment = await Comment.find({ postId: post._id }).lean().exec()
    return comment
}

module.exports = router;

