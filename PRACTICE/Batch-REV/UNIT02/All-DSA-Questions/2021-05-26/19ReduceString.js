

function runProgram(input) {

    var stack = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] == stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(input[i]);
        }
    }

    var joinStack = stack.join("");

    if (joinStack == "") {
        console.log("Empty String");
    }
    else {
        console.log(joinStack);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`aaabccddd`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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
}

