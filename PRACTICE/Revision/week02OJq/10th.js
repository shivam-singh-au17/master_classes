function runProgram(input) {

    var newInput = input.trim().split(" ").map(Number);

    var A = newInput[0]
    var B = newInput[1]
    var C = newInput[2]

    if (A < B && A < C) {
        console.log(A);
    } else if (B < C && B < A) {
        console.log(B);
    } else if (C < A && C < B) {
        console.log(C);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`11 3 17`);
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