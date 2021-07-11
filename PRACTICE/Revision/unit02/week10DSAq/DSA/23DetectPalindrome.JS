function revNumArr(numArr) {
    var res = "";
    for (var i = numArr.length - 1; i >= 0; i--) {
        res += numArr[i];
    }
    return res;
}

function printResult(res, input) {
    if (res == input) {
        return "Yes";
    } else {
        return "No"
    }
}

function runProgram(input) {

    var Input = input.split("\n");
    var numArr = Input[0].split("").map(Number);

    var revFunction = revNumArr(numArr);
    var ans = printResult(revFunction, input)
    console.log(ans)

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1221`);
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