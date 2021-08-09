
function OptimalSplitting(num) {

    var count = 0;

    while (num > 0) {
        if (num & 1 != 0) {
            count++;
        }
        num /= 2;
    }
    return count;

}

function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {
        var num = Number(input[i]);
        var res = OptimalSplitting(num);
        console.log(res);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
15
2147483648`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
