
const EventEmitter = require("events");
const { sendVerification, sendWelcome } = require("./sendMail");
const eventEmitter = new EventEmitter();


const register = () => {
    eventEmitter.on("user registered", sendVerification);
    eventEmitter.on("user registered", sendWelcome);

    eventEmitter.emit("user registered",{email:"shivamsingh4458@gmail.com"});
}

register();


// eventEmitter.on("taking lecture", (nameObj) => {
//     console.log(`i'm shivam ${nameObj.name}`);
// });

// eventEmitter.emit("taking lecture", { name: "singh" });


