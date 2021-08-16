

function NumOfWays(N) {

    if (N < 0) {
        return 0;
    }
    if (N == 1 || N == 0) {
        return 1;
    }
    else {
        return NumOfWays(N - 5) + NumOfWays(N - 2) + NumOfWays(N - 1);
    }

}


function runProgram(input) {

    let Input = input.split('\n');
    let testCases = Number(Input[0]);
    for (let i = 1; i <= testCases; i++) {
        var num = Number(Input[i]);
        let ans = NumOfWays(num);
        console.log(ans);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1
4`);
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

