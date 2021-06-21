function runProgram(input) {

    var newInput = input.split(" ").map(Number);

    var left = newInput[0]
    var right = newInput[1]
    var k = newInput[2]
    var count = 0;
    for (var i = left; i <= right; i++) {
        if (i % k == 0) {
            count++
        }
    }
    console.log(count);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1 15 1`);
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