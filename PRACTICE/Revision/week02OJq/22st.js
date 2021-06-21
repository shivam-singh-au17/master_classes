function runProgram(input) {
    var input1 = input.trim();
    var newInput = Number(input1)

    for (var i = 1; i <= ((newInput * 2) + 1); i++) {
        var result = "";
        for (var j = 1; j <= ((newInput * 2) + 1); j++) {
            if (i == newInput + 1 || j == newInput + 1) {
                result += "*";
            } else {
                result += " ";
            }
        }
        console.log(result);
    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`2`);
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