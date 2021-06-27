function runProgram(input) {
    var input = input.split(" ");
    var n = input[0].split(" ").map(Number);
    var m = input[1].split(" ").map(Number);
    var count = 0;
    for (let i = 0; i <= 1000; i++) {
        for (let j = 0; j <= 1000; j++) {
            if (i ** 2 + j == n && j ** 2 + i == m) {
                count++
            }

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