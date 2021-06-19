
// var arr2D = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 5],
//     [7, 8, 9, 6],
//     [2, 4, 6, 8]
// ]

// var row = arr2D.length;
// var col = arr2D[0].length;

function SumWithoutBorders(arr2D, row, col) {
    
    var sum = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i != 0 && j != 0 && i != (row - 1) && j != (col - 1)) {
                sum += arr2D[i][j];
            }
        }
    }
    return sum;
    
}


function inNumber(row) {
    return row.split(" ").map(Number);
}


function runProgram(input) {

    var Input = input.split("\n");
    var testcases = Number(Input[0]);

    var tempRow = 0;
    for (var i = 1; i <= testcases; i++) {

        var rowCol = Input[tempRow + i].split(" ").map(Number);
        var row = rowCol[0];
        var col = rowCol[1];

        var mat = Input.slice((tempRow + i + 1), (row + 1 + i + tempRow));
        var newMat = mat.map(inNumber);

        tempRow += row

        var result = SumWithoutBorders(newMat, row, col);
        console.log(result);
      
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
3 3
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

