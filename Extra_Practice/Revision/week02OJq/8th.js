function runProgram(input) {

    var newInput = input.trim().split(" ").map(Number);

    if (newInput % 5 == 0 && newInput % 7 == 0 && newInput % 35 == 0) {
        console.log("Masai School");
    } else if (newInput % 7 == 0) {
        console.log("Masai");
    } else if (newInput % 5 == 0) {
        console.log("School");
    } else {
        console.log("Hurray");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`35`);
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