function runProgram(input) {

    var input1 = input.split(" ");

    var tScore = 450;
    var p = Number(input1[0]);
    var c = Number(input1[1]);
    var m = Number(input1[2]);

    console.log(tScore - (p + c + m));

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

