
function findKDigno(arr2D, row, col, k) {

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (arr2D[i][j] == k) {
                var num1 = i - j;
                var num2 = i + j;
            }
        }
    }


    var res = "";
    var res2 = "";

    for (var i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            if (i - j == num1) {
                res += arr2D[i][j] + " ";
            }
            if (i + j == num2) {
                res2 += arr2D[i][j] + " ";
            }
        }
    }
    console.log(res);
    console.log(res2);

}


function inNumber(row) {
    return row.split(" ").map(Number);
}


function runProgram(input) {

    var Input = input.split("\n");
    var rowCol = Input[0].split(" ").map(Number);
    var row = rowCol[0];
    var col = rowCol[1];

    var mat = Input.slice(1, row + 1);
    var newMat = mat.map(inNumber);

    var target = Number(Input[row + 1])

    findKDigno(newMat, row, col, target)
    
}


if (process.env.USERNAME === "shiva") {
    runProgram(`3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
13`);
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

