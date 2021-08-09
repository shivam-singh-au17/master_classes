function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var l = Number(newInput[0]);

    for (var a = 0; a < l; a++) {

        var n = Number(newInput[2 * a + 1])
        var arr = newInput[2 * a + 2].split(" ").map(Number)

        function sum(arr, n) {
            if (n <= 0) { return 0; }
            else { return (sum(arr, n - 1) + arr[n - 1]); }
        }

        var x = sum(arr, n)
        console.log(x);

    }


}
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