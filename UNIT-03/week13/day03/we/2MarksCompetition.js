
function runProgram(input) {

    var input = input.split("\n");
    var N = Number(input[0]);
    var arr = input[1].trim().split(" ").map(Number);

    var res = "";
    for (var i = 0; i < N; i++) {
        for (var j = i; j < N; j++) {
            if (arr[i] < arr[j]) {
                break;
            }
        }
        if (j == N) {
            res += arr[i] + " "
        }
    }
    console.log(res);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6
16 17 4 3 5 2`);
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

