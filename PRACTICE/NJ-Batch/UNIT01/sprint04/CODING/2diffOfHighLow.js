
function runProgram(input) {
    input = input.trim().split("\n");
    var test = Number(input[0]);
    for (var i = 1; i <= test; i++) {
        var n = Number(input[(2 * i) - 1]);
        var arr = input[2 * i].trim().split(' ').map(Number).sort(function (a, b) {
            return a - b;
        });
        var min_sum = 0;
        var max_sum = 0;
        for (var j = 0; j < 3; j++) {
            min_sum += arr[j];
        }
        for (var j = n - 1; j >= n - 3; j--) {
            max_sum += arr[j]
        }
        var diff = max_sum - min_sum;
        console.log(diff);
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
6
1 2 3 4 5 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

