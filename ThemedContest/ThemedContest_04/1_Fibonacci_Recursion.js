
function FibonacciRecursion(num) {

    if (num == 0 ) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let res = FibonacciRecursion(num - 1) + FibonacciRecursion(num - 2);
    return res;
}


function runProgram(input) {

    let num = Number(input);
    console.log(FibonacciRecursion(num));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`35`);
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

