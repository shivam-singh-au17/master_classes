
function findWineer(arr2D, row, col) {

    // Opposite diagonal container(When player wins along opposite diagonal)
    
    var count1o = 0
    var count1x = 0
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i == col - j - 1) {
                if (arr2D[i][j] == 'o') {
                    count1o++;
                } else if (arr2D[i][j] == 'x') {
                    count1x++;
                }
            }
        }
    }

    // Diagonal container(When player wins along diagonal)

    var countdigo = 0
    var countdigx = 0
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (i == j) {
                if (arr2D[i][j] == 'o') {
                    countdigo++;
                } else if (arr2D[i][j] == 'x') {
                    countdigx++;
                }
            }
        }
    }


    // Rows container(When player wins along rows)

    var count3o = 0
    var count3x = 0
    var strArr = []
    for (var i = 0; i < row; i++) {
        var res = "";
        for (var j = 0; j < col; j++) {
            res += arr2D[i][j]
        }
        strArr.push(res)
    }

    for (var k = 0; k < strArr.length; k++) {
        if (strArr[k] == 'ooo') {
            count3o++;
        } else if (strArr[k] == 'xxx') {
            count3x++;
        }
    }


    // Columns container(When player wins along columns)
    
    var count3lo = 0
    var countl3x = 0
    var strArr = []
    for (var j = 0; j < col; j++) {
        var res = "";
        for (var i = 0; i < row; i++) {
            res += arr2D[i][j]
        }
        strArr.push(res)
    }

    for (var k = 0; k < strArr.length; k++) {
        if (strArr[k] == 'ooo') {
            count3lo++;
        } else if (strArr[k] == 'xxx') {
            countl3x++;
        }
    }



    if (count3o == 1 || count1o == 3 || countdigo == 3 || count3lo == 1) {
        return 'o'
    } else if (count3x == 1 || count1x == 3 || countdigx == 3 || countl3x == 1) {
        return 'x'
    } else {
        return 'Tie'
    }
}



function inNumber(row) {
    return row.split(" ");
}


function runProgram(input) {

    var Input = input.split("\n");

    var row = 3;
    var col = 3;

    var mat = Input.slice(0, row + 1);
    var newMat = mat.map(inNumber);
    
    var ans = findWineer(newMat, row, col)
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`x o x
o x x
o o o`);
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

