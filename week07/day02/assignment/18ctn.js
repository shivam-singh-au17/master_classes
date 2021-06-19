
function CatchNumber(row, col) {
    if (row == col)
        return (row * row - (row - 1));

    else if (row > col) {
        if (row % 2 == 0)
            return row * row - (col - 1);
        else
            return (row - 1) * (row - 1) + 1 + (col - 1);
    }

    else {
        if (col % 2 == 0)
            return (col - 1) * (col - 1) + 1 + (row - 1);
        else
            return col * col - (row - 1);
    }
}


function runProgram(input) {

    var data = input.split("\n");
    var testCases = Number(data[0]);

    for (var i = 1; i <= testCases; i++){
        var rowCol = data[i].split(" ").map(Number);

        var row = rowCol[0];
        var col = rowCol[1];
        
        var result = CatchNumber(row, col);
        console.log(result);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
2 3
1 1
4 2`);
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

