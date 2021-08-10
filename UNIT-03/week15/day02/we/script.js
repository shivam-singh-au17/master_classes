
const express = require("express")
const app = express()

// app.use(logger)
app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("home page get request")
    next()
})

app.post("/", (req, res) => {
    res.status(201).json(req.body);
    // console.log('req.body:', req.body);
    console.log("home page get request");
})


// function logger(req, res, next) {
//     console.log("logging before");
//     next();
//     console.log("logging after");
// }

app.listen(1234, () => {
    console.log("listening on port 1234");
})
