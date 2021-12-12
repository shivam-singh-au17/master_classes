
const express = require("express");

const connect = require("./configs/db");

const { signup, signin } = require("./controller/auth.controller")
const userController = require("./controller/user.controller")

const app = express();

app.use(express.json());

app.post("/signup", signup);
app.post("/signin", signin);

app.use("/posts", userController)

app.listen(3333, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 3333");
})



