

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
                queue.reverse()
                queue.pop()
                queue.reverse()
            }
        }
        
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`20
D
E 74
E 24
E 68
E 100
E 90
E 88
E 10
E 9
E 65
E 65
E 24
E 74
D
E 68
E 10
E 65
D
E 74
E 71`);
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

