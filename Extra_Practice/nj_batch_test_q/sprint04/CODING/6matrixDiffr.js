function runProgram(input) {
    input = input.trim().split("\n");
    var p = input[0].split(" ");
    var r = Number(p[0]);
    var c = Number(p[1]);

    var mat = input.slice(1).map(function (num) {
        return num.split(" ").map(Number);
    });
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (mat[i][j] % 2 == 0) {
                sum1 = sum1 + mat[i][j];
            } else if (mat[i][j] % 2 == 1) {
                sum2 = sum2 + mat[i][j];
            }
        }
    } console.log(Math.abs(sum1 - sum2))

}
if (process.env.USERNAME === "shiva") {
    runProgram(`3 3
1 2 3
4 5 6
7 8 9`);
} else {
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
}