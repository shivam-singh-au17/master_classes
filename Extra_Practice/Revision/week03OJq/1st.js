function runProgram(input) {

    var Input = input;
    var n = Input.length;
    var temp = Input[0]
    var count = 1;
    var result = "";

    for (var i = 1; i < n; i++){
        if (Input[i] == temp) {
            count++;
        } else {
            result += temp + count;
            count = 1;
            temp = Input[i];
        }
    }
    result += temp + count;
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`aaabbbbcc`);
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