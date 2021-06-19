
function countNo(items) {

    var n = items.length;
    var bigNum = items[0];
    var result = [items[0]];
    for (var i = 0; i < n; i++) {
        if (items[i + 1] > bigNum) {
            bigNum = items[i + 1]
            result.push(bigNum)
        }
    }
    return (result)
}

function printResult(result, k) {
    var ans = result.length * k;
    console.log(ans);
}

function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);

    for (var i = 1; i <= times; i++) {

        var newIn = isSplit[i * 2].split(" ").map(Number);
        var newInp = isSplit[(i * 2) - 1].split(" ").map(Number);

        var anse = countNo(newIn);
        printResult(anse, newInp[1]);

    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
6 3
8 2 20 15 90 40 50 60 
5 12
12 20 39 45 89`);
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