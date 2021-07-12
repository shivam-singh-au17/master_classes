function runProgram(input) {
    var input = input.split("\n");
    var n = input[0].split(" ").map(Number);
    var arr = []
    for (let a = 1; a <= n; a++) {
        arr.push(input[a])
    }
    var country = "India";
    console.log(arr.indexOf(country) + 1);
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