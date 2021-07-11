
function spiralTraversal(mat) {

    var row = mat.length;
    var col = mat[0].length;

    var colStart = 0
    var colEnd = col - 1
    var rowStart = 0
    var rowEnd = row - 1

    var dirc = 0;
    var TravList = "";

    while (colStart <= colEnd && rowStart <= rowEnd) {

        if (dirc == 0) {
            for (var i = rowEnd; i >= rowStart; i--) {
                TravList += mat[i][colStart] + " ";
            }
            colStart++;

        } else if (dirc == 1) {
            for (var i = colStart; i <= colEnd; i++) {
                TravList += mat[rowStart][i] + " ";
            }
            rowStart++;

        } else if (dirc == 2) {
            for (var i = rowStart; i <= rowEnd; i++) {
                TravList += mat[i][colEnd] + " ";
            }
            colEnd--;

        } else if (dirc == 3) {
            for (var i = colEnd; i >= colStart; i--) {
                TravList += mat[rowEnd][i] + " ";
            }
            rowEnd--;
        }

        dirc = (dirc + 1) % 4;

    }

    return TravList;

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

        var res = spiralTraversal(newMat)
        console.log(res);

        tempRow += row + 1
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
4 3
1 10 9
2 11 8
3 12 7
4 5 6 `);
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

