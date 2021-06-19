
function sabaWordCount(mat, row, col, s) {
    var count = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {

            // HORIZONTAL 
            if (j < col - 3) {
                var temp = "";
                temp += mat[i][j] + mat[i][j + 1] + mat[i][j + 2] + mat[i][j + 3]
                if (temp == s) {
                    count++
                }
            }

            // VERTICAL 
            if (i < row - 3) {
                var temp = "";
                temp += mat[i][j] + mat[i+1][j] + mat[i+2][j] + mat[i+3][j]
                if (temp == s) {
                    count++
                }
            }

            // DIAGONAL DOWN 
            if ((i < row - 3) && (j < col - 3) ) {
                var temp = "";
                temp += mat[i][j] + mat[i + 1][j+1] + mat[i + 2][j+2] + mat[i + 3][j+3]
                if (temp == s) {
                    count++
                }
            }

            // DIAGONAL UP
            if ((i >= 3) && (j < col - 3)) {
                var temp = "";
                temp += mat[i][j] + mat[i - 1][j + 1] + mat[i - 2][j + 2] + mat[i - 3][j + 3]
                if (temp == s) {
                    count++
                }
            }

        }
    }
    return count;
}


function inString(row) {
    return row.split("");
}


function runProgram(input) {

    var Input = input.split("\n");
    var rowCol = Input[0].split(" ").map(Number);
    var row = rowCol[0];
    var col = rowCol[1];
    var s = 'saba'

    var mat = Input.slice(1, row + 1);
    var newMat = mat.map(inString);

    var ans = sabaWordCount(newMat, row, col, s)
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`5 5
safer
aajad
babol
aaran
songs`);
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

