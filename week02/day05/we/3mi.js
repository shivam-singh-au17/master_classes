function runProgram(input) {
    var input1 = input.split(" ").map(Number);

    var n = input1.length;
    var N = n + 1;
    var totalSum = N * (N + 1) / 2;

    var actualSum = 0;
    for (var i = 0; i < n; i++) {
        actualSum += input1[i]
    }

    var result = totalSum - actualSum;
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 5 1 3`);
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