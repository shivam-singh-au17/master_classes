function runProgram(input) {
    var input = input.split("\n");
    var n = +input;
    function febonacci(n) {
        if (n <= 1) {
            return n;
        }
        return febonacci(n - 1) + febonacci(n - 2)
    }
    var x = febonacci(n);
    console.log(x)


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