function runProgram(input) {

    var newInput = input.split(" ").map(Number);

    var sumOfNat = (newInput.length + 1) * ((newInput.length+1) + 1) / 2;

    var sum = 0;
    for (var i = 0; i < newInput.length; i++) {
        sum += newInput[i]
    }
    var missing = sumOfNat - sum;
    console.log(missing);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 5 1 3`);
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