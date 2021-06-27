function runProgram(input) {
    var input = input.split("\n");
    var length = input[0].split(" ").map(Number);
    var n = length[0];
    var k = length[1];
    var array = input[1].split(" ").map(Number);
    var skip = 0;
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= k && skip < 2) {
            count++;
        }
        else {
            skip++;
        }
    }
    console.log(count);
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