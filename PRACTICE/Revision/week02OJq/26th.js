function runProgram(input) {

    var newInput = input.split(" ").map(Number);

    for (var i = 1; i <= newInput; i++) {
        var result = "";
        for (j = 1; j <= newInput - i; j++) {
            result += "  "
        }
        for (k = 1; k <= i; k++) {
            result += "* "
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