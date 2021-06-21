
function isTwoPower(num) {
    if (num == 0) {
        return "NO";
    }
    while (num != 1) {
        if (num % 2 == 1) {
            return "NO";
        }
        num = num / 2;
    }
    return "YES";
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