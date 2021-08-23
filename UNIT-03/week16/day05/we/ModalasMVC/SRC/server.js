
const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller")
const tagController = require("./controllers/tag.controller")
const postController = require("./controllers/post.controller")
const commentController = require("./controllers/comment.controller")

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/tags", tagController);
app.use("/posts", postController);
app.use("/comments", commentController);

app.listen(5432, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 5432");
})



