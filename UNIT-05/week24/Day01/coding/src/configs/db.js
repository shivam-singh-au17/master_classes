const mongoose = require("mongoose");

const connect = () => {
    const dbUrl = process.env.NODE_ENV === "devlopment" ? "mongodb://localhost:27017/pagination" : "";
    return mongoose.connect(dbUrl);
}

module.exports = connect;



