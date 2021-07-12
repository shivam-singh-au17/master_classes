

//    1 -> 2
//    ^
//    |         
//    4 


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
            for (var i = rowEnd; i >= rowStart; i--) {
                list += mat[i][colStart] + " ";
            }
            colStart++;

        } else if (dirc == 1) {

            for (var i = colStart; i <= colEnd; i++) {
                list += mat[rowStart][i] + " ";
            }
            rowStart++;

        } else if (dirc == 2) {

            for (var i = rowStart; i <= rowEnd; i++) {
                list += mat[i][colEnd] + " ";
            }
            colEnd--;

        } else if (dirc == 3) {

            for (var i = colEnd; i >= colStart; i--) {
                list += mat[rowEnd][i] + " ";
            }
            
            rowEnd--;
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
        var rowCol = Input[tempRow].split(" ").map(Number);
        var row = rowCol[0]
        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res = spiralOrder(newMat)
        console.log(res);

        tempRow += row + 1
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
3 4
1 2 3 10
4 5 6 11
7 8 9 12
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
4 3
1 2 3
4 5 6
7 8 9
10 11 12
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








// 2nd mathod any way plz comform it 



function runProgram(input) {
    var input = input.split("\n");
    var t = input[0].split(" ").map(Number);
    var line = 1;
    for (let i = 1; i <= t; i++) {
        var [r, c] = input[line].split(" ").map(Number);
        line++;
        var mat = [];
        for (let j = 0; j < r; j++) {
            mat.push(input[line].split(" ").map(Number));
            line++;

        }
        var size = r * c;
        var count = 0;
        var minCol = 0;
        var minRow = 0;
        var maxCol = c - 1;
        var maxRow = r - 1;
        var result = ""
        while (count < size) {
            for (let i = minRow; i <= maxRow && count < size; i++) {
                result += mat[i][minCol] + " ";
                count++;
            }
            minCol++;
            for (let i = minCol; i <= maxCol && count < size; i++) {
                result += mat[maxRow][i] + " ";
                count++;
            }
            maxRow--;
            for (let i = maxRow; i >= minRow && count < size; i--) {

                result += mat[i][maxCol] + " ";
                count++;
            }
            maxCol--;
            for (let i = maxCol; i >= minCol && count < size; i--) {

                result += mat[minRow][i] + " ";
                count++;
            }
            minRow++;
        }
        console.log(result);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});