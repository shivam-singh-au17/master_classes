function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var data = newInput[0];
    var n = Number(newInput[1]);

    var array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var n = n % 7;

    if ((array.indexOf(data) + n) >= 7) {
        console.log(array[(array.indexOf(data) + n - 7)]);
    } else {
        console.log(array[(array.indexOf(data) + n)]);
    }

}
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