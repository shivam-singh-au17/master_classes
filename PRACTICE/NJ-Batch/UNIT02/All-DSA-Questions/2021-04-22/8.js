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
        for (let k = 0; k < mat.length; k++) {
            result += mat[0][k] + " "

        }
        for (let k = 1; k < mat.length; k++) {
            for (let l = mat.length - 2; l >= 0; l--) {
                if (k + l == num - 1) {
                    result += mat[k][l] + " "
                }
            }


        }
        for (let k = 1; k < mat.length; k++) {
            result += mat[num - 1][k] + " "

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