
const express = require("express");

const router = express.Router();

const Comment = require("../models/comment.model");

const crudController = require("./crud.controller");

router.post("/", crudController(Comment).post)
router.get("/", crudController(Comment).get);
router.get("/:id", crudController(Comment).getOne);
router.patch("/:id", crudController(Comment).patchOne);
router.delete("/:id", crudController(Comment, "comment").deleteOne);


module.exports = router;

