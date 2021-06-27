function runProgram(input) {
    var input = input.split("\n");
    var n = input[0].split(" ").map(Number);
    for (let i = 0; i < n; i++) {
        var res = ""
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == n - 1) {
                res += "* "
            }
            else {
                res += "  "
            }
        }
        console.log(res);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});