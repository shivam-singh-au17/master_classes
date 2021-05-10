function runProgram(input) {
    var input1 = input.split(" ");
    var n1 = Number(input1[0]);
    var n2 = Number(input1[1]);

    var Prime_num = "";

    for (var i = n1; i <= n2; i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (i > 1 && isPrime == true) {
            Prime_num += i + " "
        }
    }
    console.log(Prime_num);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`1 8`);
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