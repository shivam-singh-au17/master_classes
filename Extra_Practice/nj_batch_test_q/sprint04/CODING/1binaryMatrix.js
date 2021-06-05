function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r1 = matOneDim[0];
    var c1 = matOneDim[1];

    var matOne = newInput.slice(1).map(function (row) {
        return row.split(" ").map(Number);
    });
    for (var i = 0; i < r1; i++) {
        var res = "";
        for (var j = 0; j < c1; j++) {
            if (matOne[i][j] == 0) {
                matOne[i][j] = 1;
                res = res + matOne[i][j] + " ";
            } else {
                matOne[i][j] = 0;
                res = res + matOne[i][j] + " ";
            }
        }
        console.log(res)
    }
}
if (process.env.USERNAME === "shiva") {
    runProgram(`3 2
1 0
0 1
1 1`);
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
