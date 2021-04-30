function runProgram(input) {

    var input1 = input.split(" ");

    var a = Number(input1[0])
    var b = Number(input1[1])
    var c = Number(input1[2])
    var d = Number(input1[3])
    var e = Number(input1[4])
    var f = Number(input1[5])

    console.log(a + b * 2 + c * 3 + d * 3 + e * 2 + f * 2);

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