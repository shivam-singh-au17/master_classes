

function Ntraverse2DArr(mat, n) {

    var res = "";
    for (var i = n - 1; i >= 0; i--) {
        res += mat[i][0] + " "
    }

    for (var i = 1; i < n; i++) {
        res += mat[i][i] + " "
    }

    for (var i = n - 2; i >= 0; i--) {
        res += mat[i][n - 1] + " "
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

        var res = Ntraverse2DArr(newMat, row)
        console.log(res);

        tempRow += row + 1
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
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
















// function Ntraverse2DArr(mat, n) {
//     if (n == 1) {
//         return mat[0][0]
//     } else {
//         var res = "";
//         for (var i = n - 1; i >= 0; i--) {
//             for (var j = 0; j < n; j++) {
//                 if (j == 0) {
//                     res += mat[i][j] + " "
//                 }
//             }
//         }

//         for (var i = 1; i < n - 1; i++) {
//             for (var j = 1; j < n - 1; j++) {
//                 if (i == j) {
//                     res += mat[i][j] + " "
//                 }
//             }
//         }

//         for (var i = n - 1; i >= 0; i--) {
//             for (var j = 0; j < n; j++) {
//                 if (j == n - 1) {
//                     res += mat[i][j] + " "
//                 }
//             }
//         }
//         return res;
//     }

// }