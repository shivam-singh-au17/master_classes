
function humanTime(mins) {
    var minutes = mins % 60;
    if (minutes < 10) {
        if (mins == 60) {
            console.log(1 + "hr" + " " + minutes + "0mins");
        } else if (mins < 60) {
            console.log(0 + "hr" + " " + "0" + minutes + "mins");
        } else if (mins % 60 == 0 && mins > 60) {
            console.log((mins / 60) + "hrs" + " " + minutes + "0mins");
        } else {
            console.log(((mins - minutes) / 60) + "hrs" + " " + "0" + minutes + "mins");
        }
    } else {
        if (mins == 60) {
            console.log(1 + "hr" + " " + minutes + "0mins");
        } else if (mins < 60) {
            console.log(0 + "hr" + " " + minutes + "mins");
        } else if (mins % 60 == 0 && mins > 60) {
            console.log((mins / 60) + "hrs" + " " + minutes + "0mins");
        } else {
            console.log(((mins - minutes) / 60) + "hrs" + " " + minutes + "mins");
        }
    }

}

function runProgram(input) {

    var Input = Number(input)
    humanTime(Input);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`146043908764`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
