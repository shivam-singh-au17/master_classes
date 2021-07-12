function runProgram(input) {
    var newInput = input.split("\n");
    var t = +newInput[0];
    var line = 1;
    for (let i = 0; i < t; i++) {
        var num = +newInput[line];
        line++;
        var mat = [];
        for (let j = 0; j < num; j++) {
            mat.push(newInput[line].split(" ").map(Number));
            line++;
        }
        var result = ""
        for (let k = 0; k < num; k++) {
            result += mat[k][0] + " "

        }
        for (let k = num - 2; k >= 0; k--) {
            for (let l = 1; l <= num - 1; l++) {
                if (k + l == num - 1) {
                    result += mat[k][l] + " "
                }
            }

        }
        for (let k = 1; k < num; k++) {
            result += mat[k][num - 1] + " "

        }
        console.log(result)
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