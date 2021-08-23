
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
// const users = [];


// FIRST WE NEED TO CONNECT MONGODB DATABASES IN EXPRESS
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/FirstMongoose", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
}

// DEFIND USER SCHEMAA
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    age: Number
});


const User = mongoose.model("user", userSchema); //USERS <COLLECTION NAME> IN MONGODB

// Post SCHEMA AND MODAL
// -title
// - body

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    tagId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required: true,
    }]
}, {
    versionKey: false,
    timestamps: true
});

const Post = mongoose.model("post", postSchema);


// COMMENT SCHEMA AND MODAL
// - commentBody


const commentSchema = new mongoose.Schema({
    commentBody: { type: String, required: true },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

const Comment = mongoose.model("comment", commentSchema);



// Tags SCHEMA AND MODAL
// - name

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});

const Tag = mongoose.model("tag", tagSchema);

// ---------------------- CRUD OPERATIONS FOR USERS -------------------------------


app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.send(user)
});


app.get("/users", async (req, res) => {
    const user = await User.find().lean().exec();

    return res.send(user);
});



app.get("/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id).lean().exec();
    return res.send(user);
});


app.patch("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.send(user);
});


app.delete("/users/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.send(user);
});


// THIS CODE FOR FIND ALL POST POSTED BY ONE USER
app.get("/users/:id/posts", async function (req, res) {
    const userPost = await Post.find({ userId: req.params.id }).lean().exec()
    const user = await User.findById(req.params.id)
    return res.status(200).json({ posts: userPost, user: user })
})

// THIS CODE FOR FIND ALL COMMENTS FOR ONE POST
app.get("/users/:id/comments", async function (req, res) {
    const userPosts = await Post.find({ userId: req.params.id }).lean().exec()
    let userPostsWithComments = {};
    userPosts.forEach(async post => {
        const postId = post._id;
        const comment = await getUserPostsWithComments(post);
        userPostsWithComments[postId] = {};
        userPostsWithComments[postId]["post"] = post;
        userPostsWithComments[postId]["comments"] = comment;
    })
    const user = await User.findById(req.params.id)
    return res.status(200).json({ postsWithComments: userPostsWithComments, user: user })
})
async function getUserPostsWithComments(post) {
    const comment = await Comment.find({ postId: post._id }).lean().exec()
    return comment
}


// ---------------------- CRUD OPERATIONS FOR POST -------------------------------


app.post("/posts", async function (req, res) {
    try {
        const post = await Post.create(req.body)
        return res.status(201).send(post)

    } catch (err) {
        return res.status(400).send(err.message)
    }

})


app.get("/posts", async (req, res) => {
    try {
        const post = await Post.find().populate("userId").populate("tagId").lean().exec();
        return res.status(200).send(post);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean().exec();
        return res.status(200).send(post);

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.patch("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(post);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(205).json({ post: post });

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


// ---------------------- CRUD OPERATIONS FOR Comment -------------------------------




app.post("/comments", async function (req, res) {
    try {
        const comment = await Comment.create(req.body)
        return res.status(201).send(comment)

    } catch (err) {
        return res.status(400).send(err.message)
    }

})


app.get("/comments", async (req, res) => {
    try {
        const comment = await Comment.find().populate("postId").lean().exec();
        return res.status(200).send(comment);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/comments/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id).lean().exec();
        return res.status(200).send(comment);

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.patch("/comments/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(comment);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/comments/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.status(205).json({ comment: comment });

    } catch (err) {
        return res.status(400).send(err.message)
    }

});





// ---------------------- CRUD OPERATIONS FOR TAGS -------------------------------




app.post("/tags", async function (req, res) {
    try {
        const tag = await Tag.create(req.body)
        return res.status(201).send(tag)

    } catch (err) {
        return res.status(400).send(err.message)
    }

})


app.get("/tags", async (req, res) => {
    try {
        const tag = await Tag.find().lean().exec();
        return res.status(200).send(tag);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.get("/tags/:id", async (req, res) => {
    try {
        const tag = await Tag.findById(req.params.id).lean().exec();
        return res.status(200).send(tag);

    } catch (err) {
        return res.status(400).send(err.message)
    }

});


app.patch("/tags/:id", async (req, res) => {
    try {
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(205).send(tag);

    } catch (err) {
        return res.status(400).send(err.message)
    }
});


app.delete("/tags/:id", async (req, res) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id);
        return res.status(205).json({ tag: tag });

    } catch (err) {
        return res.status(400).send(err.message)
    }

});





app.listen(2547, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 2547");
})


