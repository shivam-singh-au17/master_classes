
const readline = require("readline");

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline1.question("What is your name : ", function (name) {
    readline1.question("What is your country : ", function (country) {
        console.log(`${name} is from ${country}`);
        readline1.close();
    });
});

readline1.on("close", function () {
    console.log("Bye Byr!");
});
