
function runProgram(input) {

    var input1 = input.split(" ");

    var a = Number(input1[0]);
    var b = Number(input1[1]);

    var c = a / b;

    if (a % 40 != 0 && a <= 40) {
        console.log("Apply Brake");
    } else {
        console.log("Keep Going");
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