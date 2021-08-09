function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var inp = input[1].trim().split("");
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (top(stack) == inp[i]) {
            stack.pop()
        }
        else {
            stack.push(inp[i]);
        }

    }
    if (stack.length != 0) {
        console.log(stack.join(""));
    }
    else {
        console.log(-1);
    }
    function top(inp) {
        if (inp.length == 0) {
            return "Empty!"
        }
        else {
            return inp[inp.length - 1];
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