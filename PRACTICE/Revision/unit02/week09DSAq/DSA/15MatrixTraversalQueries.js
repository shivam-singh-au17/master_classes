function MatrixTraversal(mat, row, col, q) {

    if (q == 1) {

        var res = "";
        for (var i = 0; i < row; i++) {
            if (i % 2 == 0) {
                for (var j = 0; j < col; j++) {
                    res += mat[i][j] + " "
                }
            } else {
                for (var j = col - 1; j >= 0; j--) {
                    res += mat[i][j] + " "
                }
            }
        }

    }

    if (q == 2) {

        var res = "";
        for (var i = 0; i < row; i++) {
            if (i % 2 == 0) {
                for (var j = col - 1; j >= 0; j--) {
                    res += mat[i][j] + " "
                }
            } else {
                for (var j = 0; j < col; j++) {
                    res += mat[i][j] + " "
                }
            }
        }

    }

    return res;

}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {
        var rowColQ = Input[tempRow].split(" ").map(Number);
        var row = rowColQ[0]
        var col = rowColQ[1]
        var q = rowColQ[2]

        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res = MatrixTraversal(newMat, row, col, q)
        console.log(res);

        tempRow += row + 1
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(``);
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