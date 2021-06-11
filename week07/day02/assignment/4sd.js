

//  its not paas all test cases

function makeStr(str) {
    var strStore = ""
    var newStr = str.split(",");
    for (var i = 0; i < newStr.length; i++) {
        strStore += newStr[i] + " "
    }
    return strStore;
}


function SpecificDiagonalsfirst(mat, row, col, target) {
    var k = row - 1
    var resw = ""
    while (k >= (-row - 1)) {
        var store = [];
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                if (i - k == j) {
                    store.push(mat[i][j]) + " ";
                }
            }
        }
        for (var t = 0; t < store.length; t++) {
            if (store[t] == target) {
                resw += store
            }
        }
        k--
    }
    return makeStr(resw)
    

}



function SpecificDiagonalssecond(mat, row, col, target) {
   
    var k = (-col - 1)
    var resw = ""
    while (k <= 1) {
        var store = [];
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                if (i == col - j + k) {
                    store.push(mat[i][j]) + " ";
                }
            }
        }
        for (var t = 0; t < store.length; t++) {
            if (store[t] == target) {
                resw += store
            }
        }
        k++
    }
    return makeStr(resw)
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

    var ans1 = SpecificDiagonalsfirst(newMat, row, col, target)
    var ans2 = SpecificDiagonalssecond(newMat, row, col, target)
    console.log(ans1);
    console.log(ans2);

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






// 2nd rigth ans by podar 

function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r1 = matOneDim[0];
    var c1 = matOneDim[1];
    var matOne = newInput.slice(1, r1 + 1).map(function (row) {
        return row.split(" ").map(Number);
    });
    var k = Number(newInput[r1 + 1]);
    for (var a = 0; a < r1; a++) {
        // var res = "";
        for (var b = 0; b < c1; b++) {
            if (matOne[a][b] == k) {
                // For diagonal 1
                var dig1 = a - b;
                var dig2 = a + b;
            }
        }
    }
    // var
    var res = "";
    var res2 = "";

    for (var a = 0; a < r1; a++) {
        for (b = 0; b < c1; b++) {
            if (a - b == dig1) {
                res = res + matOne[a][b] + " ";
            }
            if (a + b == dig2) {
                res2 = res2 + matOne[a][b] + " ";
            }
        }
    }
    console.log(res);
    console.log(res2);
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