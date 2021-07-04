function DiamondTraversal(mat, rowCol) {

    var mid = Math.floor(rowCol / 2);

    var rowStart = 0;
    var rowEnd = rowCol - 1;
    var colStart = 0;
    var colEnd = rowCol - 1;
    var colEnd2 = rowCol - 1;

    var res = "";


    for (var i = mid; i >= colStart; i--) {
        res += mat[i][colEnd] + " ";
        colEnd--;
    }

    for (var i = mid - 1; i >= 0; i--) {
        res += mat[rowStart + 1][i] + " ";
        rowStart++;
    }

    for (var i = mid + 1; i <= rowEnd; i++) {
        res += mat[i][colStart + 1] + " ";
        colStart++;
    }

    for (var i = mid + 1; i <= colEnd2 - 1; i++) {
        res += mat[rowEnd - 1][i] + " ";
        rowEnd--;
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

        var row = Number(Input[tempRow]);

        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res = DiamondTraversal(newMat, row);
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