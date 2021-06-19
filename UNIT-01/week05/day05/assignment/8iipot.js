
function isTwoPower(n) {
    if (n == 0) {
        return "YES"
    }
    if ((n & (n-1)) == 0) {
        return "YES"
    } else {
        return "NO"
    }

}

function runProgram(input) {

    var Input = input.split("\n")
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var newInput2 = Number(Input[i]);
        var result = isTwoPower(newInput2);
        console.log(result);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
2
100`);
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
