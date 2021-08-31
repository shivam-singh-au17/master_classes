
const express = require("express");

const router = express.Router();

const Product = require("../models/product.model")
const Colour = require("../models/colour.model")

const crudController = require("./crud.controller");

router.post("/", crudController(Product).post);
router.get("/", crudController(Product).get);
router.get("/allProd", crudController(Colour).getAll);
router.get("/allCount", crudController(Colour).getAllCount);
router.get("/Morethen3Col", crudController(Colour).getMorethen3Col);
router.get("/mostCol", crudController(Product).getmostCol);
router.get("/AllColCount", crudController(Colour).getAllColCount);
router.get("/high5", crudController(Product).getHigh5);
router.get("/mandf", crudController(Product).getmandf);
router.get("/match1", crudController(Colour).getmatch1);
router.get("/:id", crudController(Product).getOne);
router.patch("/:id", crudController(Product).patchOne);
router.delete("/:id", crudController(Product, "product").deleteOne);

module.exports = router



