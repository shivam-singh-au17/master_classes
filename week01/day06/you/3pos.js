function runProgram(input) {

    var input1 = input.split(" ");

    var a = input1[0]
    var b = input1[1]
    var c = input1[2]
    var d = input1[3]
    var e = input1[4]
    var f = input1[5]

    console.log(a * b * c * d * e * f);


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