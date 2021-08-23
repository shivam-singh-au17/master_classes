
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());


const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/allmovies", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}

const userSchema = new mongoose.Schema({
    id: Number,
    movie_name: String,
    movie_genre: String,
    production_year: Number,
    budget: Number
});

const User = mongoose.model("movie", userSchema);

app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.send(user)
});

app.get("/", async (req, res) => {
    const user = await User.find().lean().exec();
    return res.send(user);
});


app.get("/users", async (req, res) => {
    const user = await User.find({ production_year: 2000 }).lean().exec();

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


app.listen(3435, async () => {
    await connect();
    console.log("Listening on port 3435");
})
