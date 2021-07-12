function runProgram(input) {

    var newInput = input.split(" ").map(Number);

    var sum = 0;
    for (var i = 0; i < newInput.length; i++) {
        sum += newInput[i]
    }
    if (sum % 2 == 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5 10 16`);
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