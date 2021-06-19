
function CheckHorizontal(mat, row) {

    var countHori = true;
    var start = 0;
    var end = row - 1;
    while (start <= end) {
        for (var j = 0; j < row; j++) {
            if (mat[start][j] != mat[end][j]) {
                countHori = false;
                break;
            }
        }
        start++;
        end--;
    }
    if (countHori == true) {
        return 1
    } else {
        return 0
    }
    
}


function CheckVertical(mat, row) {

    var countVar = true;
    var start = 0;
    var end = row - 1;
    while (start <= end) {
        for (var i = 0; i < row; i++) {
                if (mat[i][start] != mat[i][end]) {
                    countVar = false;
                    break;
                }
        }
        start++;
        end--;
    }
    if (countVar == true) {
        return 1
    } else {
        return 0
    }
}



function printResult(countHori, countVar) {

    if (countHori == 1 && countVar == 1 ) {
        return "BOTH";
    } else if (countHori == 1 && countVar == 0) {
        return "HORIZONTAL";
    } else if (countHori == 0 && countVar == 1) {
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

        console.log(ansHorizontal);
        console.log(ansVertical);

        var result = printResult(ansHorizontal, ansVertical, row)
        console.log(result);


        tempRow += row;
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`7
4
.*..
...*
*..*
*.**
4
....
..*.
.**.
.**.
5
*.*.*
..*..
*.*.*
..*..
*.*.*
5
*.*.*
.*.*.
.***.
.*.*.
*...*
5
.***.
*****
.....
*****
.***.
10
**..****..
*..**....*
*.**.**..*
...*.*.*..
**.***.**.
...*.*****
.**..*....
....****..
***..***..
*.*.......
11
*..**..*...
*.*.*..**..
.*..**...**
***....**..
*..**.**..*
******.****
*..**.**..*
***....**..
.*..**...**
*.*.*..**..
*..**..*...`);
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

