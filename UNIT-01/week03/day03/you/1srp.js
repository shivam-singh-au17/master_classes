function runProgram(input) {

    var newInput = input.split(" ").map(Number);
    log

        if (newInput[0]) {
            sumEven += i;
        }
    
    console.log(sumEven);
}

if (process.env.USERNAME === "shiva") {
    runProgram(`264 200`);
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