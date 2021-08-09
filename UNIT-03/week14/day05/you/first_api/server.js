const express = require("express");

const my_user = require("./MOCK_DATA.json");

const app = express();

app.get("/users", function (request, response) {
    return response.send({ data: my_user });
});

app.post("/users", function (request, response) {
    return response.send("Testing Post");
});

app.delete("/users/:id", function (request, response) {
    return response.send({ id: request.params.id});
});

app.patch("/users/:id", function (request, response) {
    return response.send("Testing Patch");
});

app.listen(8853, () => {
    console.log("Listing port 8853");
});