
function BeyondFactorial(num) {
    if (num == 1) {
        return 0;
    } else {
        return BeyondFactorial(num - 1) + Math.log(num);
    }
}

function runProgram(input) {

    let num = Number(input);
    let ans = BeyondFactorial(num).toFixed(4);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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
