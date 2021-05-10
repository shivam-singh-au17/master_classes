function runProgram(input) {

    var input = input.split("\n");

    var newInput = input[1].trim().split(" ").map(Number);
    var max = newInput[0];
    var min = newInput[0];
    for (var i = 0; i < newInput.length; i++) {
        if (newInput[i] > max) {
            max = newInput[i]
        } else if (newInput[i] < min) {
            min = newInput[i]
        }
    }
    console.log(min);
    console.log(max);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
-2 0 8 4`);
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