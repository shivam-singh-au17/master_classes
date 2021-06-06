function runProgram(input) {

    var newInput = input;
    var n = newInput.length;
    var result = "";
    var count = 1;
    var temp = newInput[0];

    for (var i = 1; i < n; i++) {
        if (newInput[i] == temp) {
            count++
        } else {
            result += temp + count;
            count = 1;
            temp = newInput[i];
        }
    }
    result += temp + count;
    console.log(result);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`a2b3c4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("newInput", function (input) {
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