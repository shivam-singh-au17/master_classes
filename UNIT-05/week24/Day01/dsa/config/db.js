const mongoose = require("mongoose");

// const connect = () => {
//     return mongoose.connect("mongodb://localhost:27017/pagination", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: true
//     });
// }

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/pagination");
}

module.exports = connect;

