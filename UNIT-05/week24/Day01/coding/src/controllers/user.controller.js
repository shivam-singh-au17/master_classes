
const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const crudController = require("./crud.controller");

router.post("/", crudController(User).post)
router.get("/", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User).patchOne);
router.delete("/:id", crudController(User, "user").deleteOne);


module.exports = router;

