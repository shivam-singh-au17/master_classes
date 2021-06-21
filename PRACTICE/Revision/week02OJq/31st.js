function runProgram(input) {
    var input = input.split("\n")
    var newInput = input[1].trim().split(" ").map(Number);

    var result = [];
    for (var i = newInput.length-1; i >= 0; i--) {
        result += newInput[i] + " "
    }
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
12 34 11 9 18`);
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