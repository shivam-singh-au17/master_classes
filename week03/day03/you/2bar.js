function runProgram(input) {

    var newInput = input.split(" ").map(Number);
   

    if (newInput[0] > newInput[1]) {
        console.log("Not Yet");
    } else if (newInput[0] < newInput[1]) {
        console.log("Broken");
    } else {
        console.log("Wao");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`200 20`);
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