function runProgram(input) {

    var newInput = input.split(" ").map(Number);
    var result = "";
    for (var i = newInput[0]; i <= newInput[1]; i = i + 2) {
        result += i + " "
    }
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 10`);
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