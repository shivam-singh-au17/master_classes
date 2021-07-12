function runProgram(input) {

    var input = input.split("\n");
    var firstLine = input[1].trim().split(" ").map(Number)

    var sumEven = 0;
    var sumOdd = 0;

    for (var i = 0; i < firstLine.length; i++) {
        if (firstLine[i] % 2 == 0) {
            sumEven += firstLine[i];
        } else if (firstLine[i] % 2 == 1) {
            sumOdd += firstLine[i];
        }
    }
    diff = sumEven - sumOdd;
    console.log(diff);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
1 2 3 4 5`);
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