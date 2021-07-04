
function SwapDiagonalElements(mat, row) {

    for (var j = 0; j < row; j++) {
        var res = "";
        for (var i = 0; i < row; i++) {
            res += mat[i][j] + " ";
        }
        console.log(res);
    }

}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {

        var row = Number(Input[tempRow]);

        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        SwapDiagonalElements(newMat, row)

        tempRow += row + 1
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
1 2 3
4 5 6
7 8 9
4
2 3 5 6
4 5 7 9
8 6 4 9
1 3 5 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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


