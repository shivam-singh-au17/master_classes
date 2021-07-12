function runProgram(input) {
    var n = input.split("\n")
    var l = Number(n[0]);
    var arr = n[1].split(" ").map(Number)
    var res = "";
    for (i = 0; i < l; i++) {
        for (j = i; j < l; j++) {
            if (arr[i] < arr[j]) {
                break;
            }
        }
        if (j == l) {
            res += arr[i] + " "
        }
    }
    console.log(res)
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