function runProgram(input) {

    var newInput = input.split("\n");
    var t = +newInput[0];
    var line = 1;
    for (let i = 0; i < t; i++) {
        var [r, c, q] = newInput[line].split(" ").map(Number);
        line++;

        var mat = [];
        for (let j = 0; j < r; j++) {
            mat.push(newInput[line].split(" ").map(Number));
            line++;
        }

        var result = ""
        if (q == 1) {
            for (let k = 0; k < r; k++) {
                if (k % 2 == 0) {
                    for (let l = 0; l < c; l++) {

                        result += mat[k][l] + " "
                    }
                }
                else {
                    for (let l = c - 1; l >= 0; l--) {
                        result += mat[k][l] + " "

                    }
                }

            }
            console.log(result)
        }
        if (q == 2) {
            for (let k = 0; k < r; k++) {
                if (k % 2 == 0) {
                    for (let l = c - 1; l >= 0; l--) {

                        result += mat[k][l] + " "
                    }
                }
                else {
                    for (let l = 0; l < c; l++) {
                        result += mat[k][l] + " "

                    }
                }

            }
            console.log(result)
        }
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