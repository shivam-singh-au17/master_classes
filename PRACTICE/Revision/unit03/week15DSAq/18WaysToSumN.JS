// FIXME:


function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let i = 0; i < t; i++) {
        var n = +input[i + 1];
        function sumWays(n, l) {
            if (n === l) {
                return 1;
            }
            if (l > n) {
                return 0;
            }
            return sumWays(n, l + 1) + sumWays(n, l + 2) + sumWays(n, l + 5)
        }
        var value = sumWays(n, 0)
        console.log(value)

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