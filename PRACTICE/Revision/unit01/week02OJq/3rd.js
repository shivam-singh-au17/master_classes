function runProgram(input) {

    var newInput = Number(input);

    if (newInput % 2 == 0) {
        console.log("Even");

    } else {
        console.log("Odd");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`7`);
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