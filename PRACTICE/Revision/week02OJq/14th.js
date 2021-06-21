function runProgram(input) {

    var newInput = input.split(" ");

    var num1 = Number(newInput[0]);
    var char = newInput[1];
    var num2 = Number(newInput[2]);

    if (char == "+") {
        console.log(num1 + num2);
    } else if (char == "-") {
        console.log(num1 - num2);
    } else if (char == "*") {
        console.log(num1 * num2);
    } else if (char == "/") {
        console.log(Math.floor(num1 / num2));
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6 / 4`);
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