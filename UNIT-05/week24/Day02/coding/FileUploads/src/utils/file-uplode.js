const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, callback) {
        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        callback(null, uniquePrefix + "-" + file.originalname);
    },
});

const fileFilter = function (req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

const uplode = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
})

module.exports = uplode;