



function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    var stack = [];
    var queue = [];
    for (var i = 1; i <= testCases; i++) {

        var data = input[i].split(" ").map(Number);

        if (data[0] == 1) {
            queue.push(data[1])
        }
        if (data[0] == 2) {
            stack.push(data[1])
        }
        if (data[0] == 3) {
            if (queue.length == 0) {
                console.log(-1);
            } else {
                console.log(queue[0]);
            }
        }
        if (data[0] == 4) {
            if (stack.length == 0) {
                console.log(-1);
            } else {
                console.log(stack[stack.length - 1]);
            }
        }
        if (data[0] == 5) {
            stack.push(queue[0])

            if (queue.length == 0) {
                console.log(-1);
            }
            else {
                queue.shift()
            }
        }

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
1 99999
2 10000
3
4
1 300
4
2 444
5
4
3`);
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

