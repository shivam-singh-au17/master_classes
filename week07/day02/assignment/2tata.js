
function by90Degrees(matArr, row, col) {

    var miniMatrix = "";
    for (var j = 1; j <= col; j++) {
        for (var i = 0; i < row; i++) {
            miniMatrix += matArr[i][col - j] + " "
        }
    }
    console.log(miniMatrix);
}


function inNumber(row) {
    return row.split(" ").map(Number);
}


function runProgram(input) {

    var Input = input.split("\n");
    var rowCol = Input[0].split(" ").map(Number);
    var row = rowCol[0];
    var col = rowCol[1];

    var mat = Input.slice(1, row + 1);
    var newMat = mat.map(inNumber);

    by90Degrees(newMat, row, col)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`5 10
99 41 20 13 76 43 24 59 23 90
79 57 84 85 34 2 48 34 92 92
92 63 31 10 56 81 11 29 41 71
76 99 43 87 29 57 94 1 44 19
92 35 75 57 42 68 1 82 29 64`);
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

