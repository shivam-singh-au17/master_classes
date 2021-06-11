
function RotateBy90(matArr, row) {
    for (var j = 0; j < row; j++) {
        var miniMatrix = "";
        for (var i = row - 1; i >= 0; i--) {
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

        RotateBy90(newMat, row)
    }

}

// function runProgram(input) {
//     var newInput = input.split("\n");
//     var t = Number(newInput[0]);
//     var step = 1;
//     for (var x = 0; x < t; x++) {
//         var r1 = Number(newInput[step + x]);
//         var arr = newInput.slice(step + 1 + x, step + r1 + 1 + x).map(function (row) {
//             return row.split(" ").map(Number);
//         });
//         step += r1;
//     }

// }

if (process.env.USERNAME === "shiva") {
    runProgram(`2
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
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

