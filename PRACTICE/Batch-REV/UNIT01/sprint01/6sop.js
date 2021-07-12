function runProgram(input) {

    var input1 = input.split(" ");


    var k = Number(input1[0])
    var a = Number(input1[1] * k)
    var b = Number(input1[2] * k)
    var c = Number(input1[3] * k)

    console.log(a + b + c);

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

