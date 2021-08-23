
const express = require("express");

const router = express.Router();

const Post = require("../models/post.model");

const crudController = require("./crud.controller");

router.post("/", crudController(Post).post)
router.get("/", crudController(Post).get);
router.get("/:id", crudController(Post).getOne);
router.patch("/:id", crudController(Post).patchOne);
router.delete("/:id", crudController(Post, "post").deleteOne);


module.exports = router;

