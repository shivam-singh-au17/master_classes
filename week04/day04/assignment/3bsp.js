
var sortNum = function (a, b) {
    return a - b
}

function printResult(items) {
    var ans = "";
    for (var i = 0; i < items.length; i++) {
        ans += items[i] + " ";
    }
    return ans
}


function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[1].split(" ").map(Number);

    var result1 = newInput1.sort(sortNum);
    var result2 = printResult(result1)
    console.log(result2);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 5 0 9 8`);
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
