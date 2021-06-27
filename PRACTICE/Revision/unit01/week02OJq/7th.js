function runProgram(input) {

    var newInput = input.trim().split(" ").map(Number);

    if (newInput[0] * newInput[1] > 50) {
        console.log("Enough");

    } else {
        console.log("Go On");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1 46`);
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