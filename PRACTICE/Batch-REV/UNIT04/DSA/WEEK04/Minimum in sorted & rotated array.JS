function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    var sort = arr.sort((a, b) => a - b)
    console.log(sort[0])



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