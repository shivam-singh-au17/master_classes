
const express = require("express");
const app = express();

const connect = require("./configs/db");

const productController = require("./controllers/product.controllers");
const colourController = require("./controllers/colours.controller");

app.use(express.json());

app.use("/products", productController);
app.use("/colours", colourController);

app.listen(3001, async () => {
    await connect();
    console.log("Listening on port 3001");
})
