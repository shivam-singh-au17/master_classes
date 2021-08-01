

function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0]);

    var queue = [];
    for (var i = 1; i <= testCases; i++) {

        var data = input[i].split(" ");

        if (data[0] == 'E') {
            queue.push(data[1])
            console.log(queue.length);
        }
        if (data[0] == 'D') {
            if (queue.length == 0) {
                console.log(-1, queue.length);
            } else {
                let del = queue.shift();
                console.log(Number(del), queue.length);
            }
        }
       
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
E 2
D
D
E 3
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

