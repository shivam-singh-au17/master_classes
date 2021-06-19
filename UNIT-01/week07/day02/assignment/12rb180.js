
function RotateBy180(matArr, row) {
    for (var i = row - 1; i >= 0; i--) {
        var miniMatrix = "";
        for (var j = row - 1; j >= 0; j--) {
            miniMatrix += matArr[i][j] + " "
        }
        console.log(miniMatrix);
    }
}


function inNumber(row) {
    return row.split(" ").map(Number);
}


function runProgram(input) {

    var Input = input.split("\n");
    var testcases = Number(Input[0]);

    var tempRow = 0;
    for (var i = 1; i <= testcases; i++) {

        var row = Number(Input[tempRow + i]);

        var mat = Input.slice((tempRow + i + 1), (row + 1 + i + tempRow));
        var newMat = mat.map(inNumber);

        tempRow += row

        RotateBy180(newMat, row)
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`);
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

