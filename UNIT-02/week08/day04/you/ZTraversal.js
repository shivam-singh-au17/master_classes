

function Ntraverse2DArr(mat, n) {

    var res = "";
    for (var i = 0; i < n; i++) {
        res += mat[0][i] + " "
    }

    for (var i = 1; i < n; i++) {
        res += mat[i][n - i - 1] + " "
    }

    for (var i = 1; i < n; i++) {
        res += mat[n - 1][i] + " "
    }

    return res;

}


function inNumber(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    var tempRow = 1;

    for (var i = 1; i <= testCases; i++) {
        var row = Number(Input[tempRow]);

        var mat = Input.slice(tempRow + 1, row + 1 + tempRow);
        var newMat = mat.map(inNumber,);

        var res = Ntraverse2DArr(newMat, row)
        console.log(res);

        tempRow += row + 1
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1
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

