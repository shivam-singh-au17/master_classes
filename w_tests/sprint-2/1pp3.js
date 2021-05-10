function runProgram(input) {

    var input = Number(input);
    for (var i = 1; i <= input; i++) {
        var result = "";
        for (var j = 1; j <= input; j++) {
            if (i == 1 || i == input || j == input) {
                result += "* ";
            } else {
                result += "  ";
            }
        }
        console.log(result);
    }
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