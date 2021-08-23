
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

app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.send(user)
});

app.get("/users", async (req, res) => {
    const user = await User.find({ gender: "Female" }).lean().exec();

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



app.listen(2547, async () => {
    // RUN THE CONNECT FUNCTION
    await connect();
    console.log("Listening on port 2547");
})





// app.post("/users", function (req, res) {
//     const newUsers = [...users, req.body]
//     return res.send(newUsers)
// })

// app.get("/users", function (req, res) {
//     return res.send("My name is shivam singh")
// })


// app.listen(2547, () => {
//     console.log("Listening on  port 2547");
// });