function runProgram(input) {
    input = input.split("\n");
    var arr = input[1].split(" ").map(Number);
    var p = input[0].split(" ");
    var k = +p[1];
    var n = +p[0];

    var result = 0;
    for (let i = 0; i < k; i++) {
        result += arr[i];
    }
    var sum = result;

    for (let i = k; i < n; i++) {
        sum += arr[i] - arr[i - k];
        result = Math.max(result, sum);
    }
    console.log(result);


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