function runProgram(input) {
    var input1 = input.split("\n");
    var data = input1[1].split(" ").map(Number)
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += data[i]
    }
    // console.log(sum);
    var avg = sum / data.length;
    console.log(Math.ceil(avg));

}
if (process.env.USERNAME === "shiva") {
    runProgram(`4
2 5 0 9`);
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