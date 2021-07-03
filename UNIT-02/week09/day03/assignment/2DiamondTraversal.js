
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
    runProgram(`3
3
1 2 3
4 5 6
7 8 9
7
1 2 3 4 5 6 7
8 9 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31 32 33 34 35
36 37 38 39 40 41 42
43 44 45 46 47 48 49
5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 45`);
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
