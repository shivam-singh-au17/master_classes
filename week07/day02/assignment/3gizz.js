
function ZigZag(matArr, row, col) {
    var miniMatrix = "";
    for (var i = 0; i < row; i++) {
        if (i % 2 == 0) {
            for (var j = col - 1; j >= 0; j--) {
                miniMatrix += matArr[i][j] + " "
            }
        } else {
            for (var j = 0; j < col; j++) {
                miniMatrix += matArr[i][j] + " "
            }
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

    ZigZag(newMat, row, col)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`);
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

