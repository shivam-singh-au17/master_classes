
function runProgram(input) {
    var newInput = input.split("\n");
    var [row, col] = newInput[0].split(" ").map(Number);
    var mat = newInput.slice(1).map(function (item) {
        return item.split(" ").map(Number);
    });
    res = "";
    for (var i = 0; i < row; i++) {
        if (i % 2 == 0) {
            for (var j = 0; j < col; j++) {
                res = res + mat[i][j] + " ";
            }
            res = res + "\n";
        }
    } console.log(res)
    
}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 3
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