function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let a = 0; a < t; a++) {
        var n = input[2 * a + 1].split(" ").map(Number);
        var array = input[2 * a + 2].split(" ").map(Number);
        var count = 0;

        for (let i = 0; i < n; i++) {


            if (array[i] < array[i + 1]) {
                count++;
            }

        }

        console.log(count);

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