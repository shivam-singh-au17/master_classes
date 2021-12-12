
const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller")

const app = express();

app.use(express.json());

app.use("/users", userController);

app.listen(5432, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 5432");
})



// http://localhost:5432/users?page=1&size=3

