function runProgram(input) {
    var input = input.split("\n");
    var str = input[0].split("");
    var res = ""
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i] + "";


    }
    console.log(res);
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