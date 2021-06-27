function runProgram(input) {

    var newInput = input.split(" ").map(Number);

    for (var i = 1; i <= newInput; i++) {
        var result = "";
        for (j = 1; j <= newInput; j++) {
            if (i == 1 || i == newInput || j == 1 || j == newInput) {
                result += "* ";
            } else {
                result += "  ";
            }
        }
        console.log(result);
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`3`);
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