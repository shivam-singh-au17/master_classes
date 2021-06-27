function runProgram(input) {
    var input = input.split("\n");
    var t = input[0].split(" ").map(Number);
    var line = 1;
    for (let i = 1; i <= t; i++) {
        var [r, c] = input[line].split(" ").map(Number);
        line++;
        var mat = [];
        for (let j = 0; j < r; j++) {
            mat.push(input[line].split(" ").map(Number));
            line++;
        }
        var size = r * c;
        var count = 0;
        var minRow = 0;
        var minCol = 0;
        var maxRow = r - 1;
        var maxCol = c - 1;
        var result = ""
        while (count < size) {
            for (let i = maxRow; i >= minRow && count < size; i--) {
                result += mat[i][minCol] + " ";
                count++;

            }
            minCol++;
            for (let i = minCol; i <= maxCol && count < size; i++) {
                result += mat[minRow][i] + " ";
                count++;
            }
            minRow++;
            for (let i = minRow; i <= maxRow && count < size; i++) {
                result += mat[i][maxCol] + " ";
                count++;
            }
            maxCol--;
            for (let i = maxCol; i >= minCol && count < size; i--) {
                result += mat[maxRow][i] + " ";
                count++;
            }
            maxRow--;
        }
        console.log(result);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});