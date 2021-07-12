function runProgram(input) {
    var input = input.split("\n");
    var [q, r, c] = input[0].split(" ").map(Number);
    var array = input[1].split(" ").map(Number);
    var line = 0;
    for (let i = 0; i < q; i++) {
        for (let j = 0; j < r; j++) {
            var res = "";
            for (let k = 0; k < c; k++) {
                res += array[line] + " "
                line++;
            }
            console.log(res);
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
});//Enter code here