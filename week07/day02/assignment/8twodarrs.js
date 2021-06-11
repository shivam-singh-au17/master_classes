

function findSumCount(mat, row, col, s) {
    var count = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {

            // HORIZONTAL 
            if ((col - j) >= 3) {
                if ((mat[i][j] + mat[i][j + 1] + mat[i][j + 2]) == s) {
                    count++;
                }
            }

            // VERTICAL 
            if ((row - i) >= 3) {
                if ((mat[i][j] + mat[i + 1][j] + mat[i + 2][j]) == s) {
                    count++;
                }
            }

            // DIAGONAL DOWN 
            if ((col - j) >= 3 && (row - i) >= 3) {
                if ((mat[i][j] + mat[i + 1][j + 1] + mat[i + 2][j + 2]) == s) {
                    count++;
                }
            }

            // DIAGONAL UP
            if ((col - j) >= 3 && i >= 2) {
                if ((mat[i][j] + mat[i - 1][j + 1] + mat[i - 2][j + 2]) == s) {
                    count++;
                }
            }

        }
    }
    return count;
}


function inNumber(row) {
    return row.split(" ").map(Number);
}


function runProgram(input) {

    var Input = input.split("\n");
    var rowCol = Input[0].split(" ").map(Number);
    var row = rowCol[0];
    var col = rowCol[1];
    var s = rowCol[2];


    var mat = Input.slice(1, row + 1);
    var newMat = mat.map(inNumber);

    var ans1 = findSumCount(newMat, row, col, s)
    console.log(ans1);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`4 4 11
1 2 1 8
2 2 8 6
8 1 2 5
2 5 8 6`);
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


