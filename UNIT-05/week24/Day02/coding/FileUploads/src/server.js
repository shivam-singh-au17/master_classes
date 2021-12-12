
const express = require("express");

const connect = require("./configs/db");

const productController = require("./controller/product.controller")
const galleryController = require("./controller/gallery.controller")

const app = express();

app.use(express.json());

app.use("/single", productController);
app.use("/gallery", galleryController);

app.listen(5432, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 5432");
})



