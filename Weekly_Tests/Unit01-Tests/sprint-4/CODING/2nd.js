
function matrixDivBy03(matArr, row, col) {

    var matSum = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (matArr[i][j] % 3 == 0) {
                matSum += matArr[i][j]
            }
        }
    }
    return matSum;
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
    var newMat = mat.map(inNumber,);

    var result = matrixDivBy03(newMat, row, col)

    console.log(result);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`2 3
3 1 8
2 6 0`);
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

