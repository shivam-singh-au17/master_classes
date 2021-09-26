function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(input[i].split(" ").map(Number))
    }
    var sortArr = arr.sort((a, b) => a[0] - b[0])
    var arr1 = [];
    var arr2 = [];
    for (let i = 0; i < n; i++) {
        arr1.push(sortArr[i][0]);
        arr2.push(sortArr[i][1]);
    }
    var f = 0;
    var r = 0;
    var res = 0;
    for (let i = 0; i < arr1.length; i++) {
        res += arr1[i];
        r = r + arr2[i] - res

    }
    console.log(r)



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