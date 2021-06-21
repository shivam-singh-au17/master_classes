function runProgram(input) {

    var newInput = Number(input);
    var result = 1;
    for (var i = 1; i <= newInput; i++) {
        result *= i
    }
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5`);
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