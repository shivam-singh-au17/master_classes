function runProgram(input) {
    var input = input.split("\n");
    var t = input[0].split(" ").map(Number);
    for (let a = 0; a < t; a++) {
        var n = input[2 * a + 1].split(" ").map(Number);
        var array = input[2 * a + 2].split(" ").map(Number)
        var sum = 0;
        array.forEach(function (e, i) {
            sum += (i + 1) * e

        });
        console.log(sum);
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