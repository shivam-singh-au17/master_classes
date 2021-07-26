


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    var s = 0;
    var stack = [];
    for (var i = 1; i <= testCases; i++) {

        var data = input[i].split(" ").map(Number);

        if (data[0] == 1) {
            stack.push(data[1])
        }
        if (data[0] == 2) {
            if (stack.length > 0) {
                s += stack[stack.length - 1];
                stack.pop()
            } else {
                s = s - 1;
            }
        }

    }
    console.log(s);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`8
1 2
1 3
1 5
2
2
2
2
2`);
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

