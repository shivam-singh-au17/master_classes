function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var l = Number(newInput[0]);

    var queue = [];

    for (var a = 1; a <= l; a++) {
        var arr = newInput[a].split(" ");

        var res = "";
        if (arr[0] == "E") {
            queue.push(arr[1])
            console.log(queue.length)
        }
        if (arr[0] == "D") {
            if (queue.length > 0) {
                var left = queue[0];
                queue.shift()
                res = left + " " + queue.length
                console.log(res);
            }
            else {
                res = "-1" + " " + queue.length
                console.log(res)
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
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});