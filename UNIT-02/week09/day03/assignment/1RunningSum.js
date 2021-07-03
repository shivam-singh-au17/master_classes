
function RunningSumArray(arr) {

    var sum = [arr[0]]
    for (var i = 1; i < arr.length; i++) {
        sum.push(arr[i] + sum[i - 1]);
    }
    return sum;
}

function printRes(sum) {
    var res = "";
    for (var i = 0; i < sum.length; i++) {
        res += sum[i] + " ";
    }
    return res;
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var arr = Input[i * 2].trim().split(" ").map(Number);
        var sum = RunningSumArray(arr);
        var ans = printRes(sum)
        console.log(ans);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`1
5
1 2 3 4 5`);
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
