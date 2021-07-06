function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    var stack = [];
    for (let a = 1; a <= t; a++) {
        var array = input[a].split(" ").map(Number);
        if (array[0] == 1) {
            stack.unshift(array[1])
        }
        if (array[0] == 2) {
            if (stack.length > 0) {
                stack.shift()
            }
        }
        if (array[0] == 3) {
            if (stack.length == 0) {
                console.log("Empty!");
            }
            else {
                console.log(stack[0]);
            }
        }
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