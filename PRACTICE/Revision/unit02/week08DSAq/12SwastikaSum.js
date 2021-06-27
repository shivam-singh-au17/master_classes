

function swastikaSum(mat, row, col) {

    var midRow = Math.floor(row / 2);
    var midCol = Math.floor(col / 2);
    
    var rowSum2 = 0;
    var colSum1 = 0;

    for (var i = 0; i < row; i++) {
        colSum1 += mat[i][midCol];
    }

    for (var i = midCol + 1; i < col; i++) {
        colSum1 += mat[0][i];
    }

    for (var i = midCol - 1; i >= 0; i--) {
        colSum1 += mat[row - 1][i];
    }

    for (var i = 0; i < col; i++) {
        rowSum2 += mat[midRow][i];
    }

    for (var i = midRow + 1; i < row; i++) {
        rowSum2 += mat[i][col - 1];
    }

    for (var i = midRow - 1; i >= 0; i--) {
        rowSum2 += mat[i][0];
    }

    var absDiff = Math.abs(colSum1 - rowSum2);
    return absDiff

}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");

    var rowCol = Input[0].split(" ").map(Number);
    var row = rowCol[0]
    var col = rowCol[1]

    var mat = Input.slice(1, row + 1);
    var newMat = mat.map(inNumber,);
 
    var res = swastikaSum(newMat, row, col)
    console.log(res);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`5 7
1 2 3 4 5 6 7
6 7 8 9 10 11 12
11 12 13 14 15 16 17
6 7 8 9 10 11 12
1 2 3 4 5 6 7`);
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

