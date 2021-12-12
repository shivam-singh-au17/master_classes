
const express = require("express");

const connect = require("./configs/db");

const userController = require("./controller/user.controller")

const app = express();

app.use(express.json());

app.use("/", userController);

app.listen(5432, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 5432");
})



