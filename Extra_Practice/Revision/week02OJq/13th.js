function runProgram(input) {

    var newInput = input.trim().split(" ").map(Number);
    var a = newInput[0];
    var b = newInput[1];
    var c = newInput[2];

    if ((a * a) + (b * b) == (c * c)) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 4 6`);
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