function runProgram(input) {

    var newInput = Number(input);

    if (newInput == 100) {
        console.log("A");
    } else if (newInput >= 90) {
        console.log("B");
    } else if (newInput >= 80) {
        console.log("C");
    } else {
        console.log("F");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`90`);
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