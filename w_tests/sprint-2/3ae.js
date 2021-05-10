function runProgram(input) {

    var input = input.split("\n");
    var newInput = input[1].trim().split(" ").map(Number);
    var EvenSum = 0;
    var EvenSum = 0;
    var OddSum = 0;
    for (var i = 0; i < newInput.length; i++) {
        if (newInput[i] % 2 == 0) {
            EvenSum += newInput[i]
        } else {
            OddSum += newInput[i]
        }

    }
    var x = EvenSum;
    var y = OddSum;
    var a = 2;
    var b = 3;
    var result = a * x + b * y
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
1 2 3 4 5`);
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