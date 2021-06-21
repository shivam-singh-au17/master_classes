function runProgram(input) {
    var input = input.split("\n")
    var newInput = input[1].split(" ").map(Number);

    var OddSum = newInput[0];
    var EvenSum = newInput[0];
    for (var i = 0; i < newInput.length; i++) {
        if (newInput[i] % 2 == 1) {
            OddSum += newInput[i]
        } else {
            EvenSum += newInput[i]
        }
    }
    if (OddSum > EvenSum) {
        console.log("Odd");
    } else {
        console.log("Even");
    }
   

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
12 34 11 9 18`);
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