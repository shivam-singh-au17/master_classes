
function springboard(i, j, mat) {

    let row = mat.length;
    let col = mat[0].length;

    if (i == row) {
        return 0;
    }

    let left_Val, right_Val, mid_Val

    // if (j != 0) {
        left_Val = springboard(i + 1, j - 1, mat);
    // }

    mid_Val = springboard(i + 1, j, mat);

    // if (j != row - 1) {
        right_Val = springboard(i + 1, j + 1, mat);
    // }

    let value = mat[i][j] + Math.max(left_Val, mid_Val, right_Val);
    return value;

}



function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {
        var rowCol = Input[tempRow].split(" ").map(Number);
        var row = rowCol[0]
        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);
        springboard(0, 0, newMat)

        tempRow += row + 1
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
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
