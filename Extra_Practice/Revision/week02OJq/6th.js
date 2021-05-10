function runProgram(input) {

    var newInput = input.trim().split(" ").map(Number);

    if (newInput[0] / newInput[1] > 40) {
        console.log("Apply Brake");

    } else {
        console.log("Keep Going");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`100 2`);
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