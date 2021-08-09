
const sendVerificationEmail = (myEmail) => {
    console.log(`Sendind Verification Email to ${myEmail.email}`);
}

const sendWelcomeEmail = (myEmail) => {
    console.log(`Sendind Welcome Email to ${myEmail.email}`);
}


module.exports = {
    sendVerification: sendVerificationEmail,
    sendWelcome : sendWelcomeEmail
}