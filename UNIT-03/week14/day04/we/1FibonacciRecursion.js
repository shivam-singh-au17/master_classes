
function FibonacciRecursion(n) {

    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else if (n > 1) {
        let sum = FibonacciRecursion(n - 1) + FibonacciRecursion(n - 2);
        return sum;
    }

}

function runProgram(input) {

    var input = Number(input);

    let ans = FibonacciRecursion(input);
    console.log(ans);


}


if (process.env.USERNAME === "shiva") {
    runProgram(`4`);
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

