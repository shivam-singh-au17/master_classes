function ArrayBehaviour(items) {
    var n = items.length;
    var isloop = false;
    for (var i = 0; i < n; i++) {
        if (items[i] % 2 == 1 && items[i + 1] % 2 == 1 && items[i + 2] % 2 == 1) {
            isloop = true;
            break;
        }
    }
    return isloop;
}
function printResult(isloop) {
    if (isloop == true) {
        return "Misbehave!";
    } else {
        return "Behave!";
    }
}
function runProgram(input) {
    var newInput = input.split("\n");
    var testCase = Number(newInput[0]);
    for (var i = 1; i <= testCase; i++) {
        var newdata = newInput[i * 2].split(" ").map(Number);

        var res = ArrayBehaviour(newdata);
        var res2 = printResult(res);
        console.log(res2);
    }
}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
6
1 3 3 4 5 6
5
1 2 3 5 7 4 5`);
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