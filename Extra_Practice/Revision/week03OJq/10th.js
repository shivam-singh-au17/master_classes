
function findEvenSum(num) {
    var evenSum = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            evenSum += i;
        }
    }
    return evenSum;
}

function runProgram(input) {

    var newInput = Number(input);
    var ans = findEvenSum(newInput);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8`);
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