function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    var queue = [];
    for (var i = 1; i <= testCases; i++) {

        var data = input[i].trim().split(" ");

        if (data[0] == 'E') {
            queue.push(data[1])
        }
        if (data[0] == 'D') {
            if (queue.length == 0) {
                console.log("Empty");
            } else {
                console.log(queue[0]);
                queue.shift();
            }
        }

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
E 2
E 3
D
D`);
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