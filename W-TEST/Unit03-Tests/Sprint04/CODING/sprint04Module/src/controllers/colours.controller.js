
const express = require("express");

const router = express.Router();

const Colours = require("../models/colour.model")
const crudController = require("./crud.controller");

router.post("/", crudController(Colours).post);
router.get("/", crudController(Colours).get);
router.get("/:id", crudController(Colours).getOne);
router.patch("/:id", crudController(Colours).patchOne);
router.delete("/:id", crudController(Colours, "colours").deleteOne);

module.exports = router

