
// TODO:

function madeMatrix(row) {
    var temp = 1;
    var TwoDarr = []
    for (var j = 0; j < row; j++) {
        var OneDarr = [];
        for (var k = 0; k < row; k++) {
            OneDarr.push(temp);
            temp++
        }
        TwoDarr.push(OneDarr);
    }
    return TwoDarr;

}


function dingnoSum(mat, n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i == j) {
                sum += mat[i][j];
            } else
                if (i == n - j - 1) {
                    sum += mat[i][j];
                }
        }
    }
    return sum;
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var row = Number(Input[i * 2 - 1]);

        var mat = Input[i * 2].split(" ").map(Number);

        var newMat = madeMatrix(row);
        var ans = dingnoSum(newMat, row)
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
4
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10`);
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

