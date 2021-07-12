
function findEqual(arr) {
    var temp = arr[0];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == temp) {
            count++;
        }
    }
    if (count == arr.length) {
        return true;
    } else {
        return false;
    }
}

function distinctElements(mat, row, col) {

    var count = 0;
    for (var j = 0; j < row; j++) {
        var arr = [];
        for (var i = 0; i < col; i++) {
            arr.push(mat[i][j]);
        }
        if (findEqual(arr) == true) {
            count++
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
        console.log('row:', row)
        var col = rowCol[1];
        console.log('col:', col)

        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);
        console.log('newMat:', newMat)

        var res = distinctElements(newMat, row, col)
        console.log('res:', res);

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
