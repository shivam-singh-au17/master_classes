
const express = require("express");

const router = express.Router();

const Tag = require("../models/tag.model");

const crudController = require("./crud.controller");

router.post("/", crudController(Tag).post)
router.get("/", crudController(Tag).get);
router.get("/:id", crudController(Tag).getOne);
router.patch("/:id", crudController(Tag).patchOne);
router.delete("/:id", crudController(Tag, "tag").deleteOne);


module.exports = router;

