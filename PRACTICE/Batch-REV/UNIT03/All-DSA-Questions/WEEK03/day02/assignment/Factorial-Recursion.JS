function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    function fact(n) {
        if (n == 0) {
            return 1;
        }
        else {
            return n * fact(n - 1)
        }
    }
    function main() {
        console.log(fact(n))
    }
    main()
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