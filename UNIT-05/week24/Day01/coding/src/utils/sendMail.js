

const transporter = require("../configs/mail")

module.exports = async ({ to, subject, text, html }) => {

    await transporter.sendMail({
        from: '"Shivam Singh" <shivamsingh4458@gmail.com>',
        to: to,
        subject: subject,
        text: text,
        html: html,
    });

};

