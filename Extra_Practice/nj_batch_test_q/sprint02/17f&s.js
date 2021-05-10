function runProgram(input) {

    var newInput = input.split(" ").map(Number);
    var k = newInput[0];
    var x = newInput[1];

    // k = 2 * x - y : y = 2 * x - k
    // j = 2 * x + 3 * y + 2 

    var y = 2 * x - k;
    var j = 2 * x + 3 * y + 2

    console.log(j);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5 5`);
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