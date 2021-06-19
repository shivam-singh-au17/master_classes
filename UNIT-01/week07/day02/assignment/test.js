


function CheckHorizontal(mat, row) {

    var countHori = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < row; j++) {
            if (mat[i = 0][j] == mat[i = row - 1][j]) {
                countHori++;
            }
        }
    }
    return countHori;
}


function CheckVertical(mat, row) {

    var countVar = 0;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < row; j++) {
            if (mat[i][j = 0] == mat[i][j = row - 1]) {
                countVar++;
            }
        }
    }
    return countVar;
}



function printResult(countHori, countVar, row) {

    if (countHori == row && countVar == row) {
        return "BOTH";
    } else if (countHori == row && countVar < row) {
        return "HORIZONTAL";
    } else if (countHori < row && countVar == row) {
        return "VERTICAL";
    } else {
        return "NO";
    }

}


function isString(row) {
    return row.trim().split("");
}

function runProgram(input) {

    var data = input.split("\n");
    var testCases = Number(data[0]);

    var tempRow = 0;
    for (var i = 1; i <= testCases; i++) {

        var row = Number(data[tempRow + i]);
        var mat = data.slice((tempRow + 1 + i), (row + 1 + tempRow + i));
        var newMat = mat.map(isString);

        var ansHorizontal = CheckHorizontal(newMat, row);
        var ansVertical = CheckVertical(newMat, row);

        var result = printResult(ansHorizontal, ansVertical, row)
        console.log(result);


        tempRow += row;
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*
4
....
..*.
.**.
.**.`);
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