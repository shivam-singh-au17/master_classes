function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r1 = matOneDim[0];
    var c1 = matOneDim[1];
    var matOne = newInput.slice(1, r1 + 1).map(function (row) {
        return row.split(" ").map(Number);
    });
    var sum = 0;
    var sum2 = 0;
    for (let i = 0; i < r1; i++) {

        for (let j = 0; j < c1; j++) {
            if (i == (r1 - 1) / 2 || (j == 0 && i <= (r1 - 1) / 2)
                || (j == c1 - 1 && i >= (r1 - 1) / 2)) {
                sum += matOne[i][j]

            }
            if (j == (c1 - 1) / 2
                || (i == 0 && j >= (c1 - 1) / 2) || (i == r1 - 1 && j <= (c1 - 1) / 2)) {
                sum2 += matOne[i][j]


            }

        }
    }
    console.log(Math.abs(sum - sum2));
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