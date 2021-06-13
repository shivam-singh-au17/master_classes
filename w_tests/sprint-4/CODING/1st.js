
function by90Degrees(matArr, row) {

    for (var j = 1; j <= row; j++) {
        var miniMatrix = "";
        for (var i = 0; i < row; i++) {
            miniMatrix += matArr[i][row - j] + " "
        }
        console.log(miniMatrix);
    }
}


function inNumber(row) {
    return row.split(" ").map(Number);
}


function runProgram(input) {

    var Input = input.split("\n");
    var row = Number(Input[0]);

    var mat = Input.slice(1, row + 1);
    var newMat = mat.map(inNumber,);

    by90Degrees(newMat, row)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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




