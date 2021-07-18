

function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    var stack = [];
    for (var i = 1; i <= testCases; i++) {

        var data = input[i].split(" ").map(Number);

        if (data[0] == 1) {
            if (stack.length == 0) {
                console.log("No Food");
            } else {
                console.log(stack[stack.length - 1]);
                stack.pop(data[1])
            }
        }

        if (data[0] == 2) {
            stack.push(data[1])

        }

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6
1 
2 5
2 7
2 9
1
1`);
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

