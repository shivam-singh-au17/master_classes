function runProgram(input) {

    var input1 = input.split(" ");


    var rrlo = Number(input1[0])
    var _1st = Number(input1[1])
    var _2nd = Number(input1[2])
    var _3rd = Number(input1[3])
    var _4th = Number(input1[4])
    var _5th = Number(input1[5])
    var _6th = Number(input1[6])

    console.log(rrlo - (_1st + _2nd + _3rd + _4th + _5th + _6th));

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

