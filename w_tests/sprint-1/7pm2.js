function runProgram(input) {

    var input1 = input.split(" ");
    var a = Number(input1[0]);
    var b = Number(input1[1]);
    var c = Number(input1[2]);
    var L = Number(input1[3]);
    var R = Number(input1[4]);



    var result = 0;
    for (var i = L; i <= R; i++) {
        var total = ((a * ((i) ** 2)) + b * (i) + c);
        result += total
    }
    console.log(result);


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