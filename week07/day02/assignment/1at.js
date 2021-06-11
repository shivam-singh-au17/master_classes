
function traverse2DArr(matArr, row, col) {
    var miniMatrix = "";
    for (var j = 0; j < col; j++) {
        for (var i = row - 1; i >= 0; i--) {
            miniMatrix += matArr[i][j] + " "
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

    traverse2DArr(newMat, row, col)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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

