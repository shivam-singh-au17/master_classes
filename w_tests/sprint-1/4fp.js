function runProgram(input) {

    var input1 = input.split(" ");
    var A = Number(input1[0]);
    var B = Number(input1[1]);
    var C = Number(input1[2]);
    var D = Number(input1[3]);
    var E = Number(input1[4]);
    console.log(A * B * C * D * E);

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