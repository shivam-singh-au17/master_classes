
function distinctElements(mat, row, col) {

    var outerObj = {}

    for (var i = 0; i < row; i++) {

        var innerObj = {};
        for (var j = 0; j < col; j++) {
            var InKey = mat[i][j];

            if (innerObj[InKey] == undefined) {
                innerObj[InKey] = 1
            }
            else {
                var prev = innerObj[InKey]
                innerObj[InKey] = prev + 1
            }
        }


        for (OutKey in innerObj) {
            if (outerObj[OutKey] == undefined) {
                outerObj[OutKey] = 1;
            }
            else {
                var prev1 = outerObj[OutKey]
                outerObj[OutKey] = prev1 + 1
            }

        }

    }

    var count = 0;
    for (const key3 in outerObj) {
        if (outerObj[key3] == row) {
            count++;
        }

    }
    return count;
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
        var row = rowCol[0];
        var col = rowCol[1];

        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res = distinctElements(newMat, row, col)
        console.log(res);

        tempRow += row + 1
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3 3
1 2 1
1 3 1
1 2 1
3 3
1 2 3
1 1 3
1 2 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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


