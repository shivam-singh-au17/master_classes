



function spiralOrder(mat) {

    var row = mat.length;
    var col = mat[0].length;

    var colStart = 0
    var colEnd = col - 1
    var rowStart = 0
    var rowEnd = row - 1

    var dirc = 0;
    var list = "";

    while (colStart <= colEnd && rowStart <= rowEnd) {

        if (dirc == 0) {
            for (var i = rowStart; i <= rowEnd; i++) {
                list += mat[i][colStart] + " ";
            }
            colStart++;

        } else if (dirc == 1) {

            for (var i = colStart; i <= colEnd; i++) {
                list += mat[rowEnd][i] + " ";
            }
            rowEnd--;

        } else if (dirc == 2) {

            for (var i = rowEnd; i >= rowStart; i--) {
                list += mat[i][colEnd] + " ";
            }
            colEnd--;

        } else if (dirc == 3) {

            for (var i = colEnd; i >= colStart; i--) {
                list += mat[rowStart][i] + " ";
            }
            rowStart++;
        }
        dirc = (dirc + 1) % 4;
    }
    return list;

}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {
        var row = Number(Input[tempRow])
        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res = spiralOrder(newMat)
        console.log(res);

        tempRow += row + 1
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9
`);
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
