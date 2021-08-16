
const express = require("express");
const students = require("./users.js");
const app = express();

app.use(express.json())

app.listen("8853", () => {
    console.log("listing port 8853");
})


app.get("/", (request, response) => {
    response.send("Welcome To Home Page");
})

app.get("/users", (request, response) => {
    response.json(students);
})

app.post("/users", (request, response) => {

    if (!request.body.gender) {
        response.status(400)
        response.send("Gender Requerd");
    }
    const user = {
        id: students.length + 1,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        gender: request.body.gender

    }
    students.push(user)
    response.json(user);

})


app.put("/users/:id", (request, response) => {

    let id = request.params.id
    let first_name = request.body.first_name
    let last_name = request.body.last_name
    let gender = request.body.gender

    let index = students.findIndex((students) => {
        return (students.id == Number.parseInt(id))
    })

    if (index >= 0) {

        let std = students[index]
        std.first_name = first_name
        std.last_name = last_name
        std.gender = gender
        response.json(std)

    } else {
        response.status(404)
    }

})



app.delete("/users/:id", (request, response) => {

    let id = request.params.id
    let index = students.findIndex((students) => {
        return (students.id == Number.parseInt(id))
    })
    if (index >= 0) {
        let std = students[index]
        students.splice(index, 1)
        response.json(std)
    } else {
        response.status(404)
        response.end()
    }

})


