function runProgram(input) {

    var input = input.split("\n");
    var n = +input[0];
    function factorial(n) {
        if (n == 1)
            return 0;
        return factorial(n - 1) + Math.log(n);
    }

    console.log(factorial(n).toFixed(4));



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