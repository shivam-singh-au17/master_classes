require("dotenv").config();
const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    host: process.env.NODE_ENV === "devlopment" ? "smtp.mailtrap.io" : "",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

module.exports = transporter

