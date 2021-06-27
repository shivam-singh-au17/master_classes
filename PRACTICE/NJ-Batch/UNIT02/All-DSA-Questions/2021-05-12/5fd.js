function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let a = 0; a < t; a++) {
        var n = +input[2 * a + 1];
        var str = input[2 * a + 2].split("");
        var x = 0;
        var y = 0;
        for (let i = 0; i < n; i++) {
            if (str[i] == 'L') {
                x++;
            }
            if (str[i] == 'R') {
                x--;
            }
            if (str[i] == 'U') {
                y++
            }
            if (str[i] == 'D') {
                y--
            }

        }
        if (x == 0 && y == 0) {
            console.log("Yes");
        }
        else {
            console.log("No");
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