function runProgram(input) {

    var input = input.split("\n");
    var st = input[0].split("");
    function count(str) {
        if (str == "") {
            return 0;
        }
        return str.length;

    }
    var x = count(st)
    console.log(x)


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