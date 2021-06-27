function runProgram(input) {
    var input = input.split("\n");
    var n = input[0].split(" ").map(Number);
    var array = input[1].split(" ").map(Number);
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            sum += array[i]
        }

    }
    console.log(sum);
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