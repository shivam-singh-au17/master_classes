
function RotateBy90(matArr, row, col) {
    for (var j = 0; j < col; j++) {
        var miniMatrix = "";
        for (var i = 0; i < row; i++) {
            miniMatrix += matArr[i][j] + " "
        }
        console.log(miniMatrix);
    }
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

    RotateBy90(newMat, row, col)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);
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

