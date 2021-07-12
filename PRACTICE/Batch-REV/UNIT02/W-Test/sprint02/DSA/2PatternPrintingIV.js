

function PatternPrint(num) {

    for (var i = 0; i < num; i++) {
        var res = "";
        for (var j = 0; j < num; j++) {
            if (i == 0 || j == num - 1 || j == 0) {
                res += '* '
            } else {
                res += "  "
            }
        }
        console.log(res);
    }
}

function runProgram(input) {

    var num = Number(input);
    PatternPrint(num)

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

