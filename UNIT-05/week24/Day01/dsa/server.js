const express = require("express");
const app = express();

const connect = require("./config/db")

const start = async () => {
    await connect();

    app.listen(3232, () => {
        console.log("Listing on port 3232");
    });
};

module.exports = start;

