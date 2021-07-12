function runProgram(input) {
    input = input.trim().split("\n");
    var test = Number(input[0]);
    for (var i = 1; i <= test; i++) {
        var inp = input[i].split(' ').map(Number);
        var a = inp[0];
        var b = inp[1];

        var diff = b - a;
        if (diff % 2 == 1) {
            console.log((Math.ceil(diff / 2)));
        }
        if (diff % 2 == 0) {
            console.log(diff / 2);
        }
    }
}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
5 10
6 10`);
} else {
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
}
