
var findPrime = function (num) {

    for (var i = 1; i <= num; i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }
    }
    return isPrime;
}

function printResult(isPrime) {
    if (isPrime  == true) {
        return 'Yes'
    } else {
        return 'No'
    }
}

function runProgram(input) {

    var inp_split = Number(input);

    var result = findPrime(inp_split);
    var printRes = printResult(result)
    console.log(printRes);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`13`);
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