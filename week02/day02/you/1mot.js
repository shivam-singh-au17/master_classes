function runProgram(input) {
    var input1 = input.split(" ");

    var a = Number(input1[0]);
    var b = Number(input1[1]);
    var c = Number(input1[2]);

    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        console.log(b);
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