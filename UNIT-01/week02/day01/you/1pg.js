function runProgram(input) {

    var input1 = Number(input);
    if (input1 == 100) {
        console.log("A");
    }
    else if (input1 >= 90) {
        console.log("B");
    }
    else if (input1 >= 80) {
        console.log("C");
    }
    else {
        console.log("F");
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});