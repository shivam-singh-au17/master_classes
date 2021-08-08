
function ReverrceStringWithRecursion(str, n) {

    if (n <= 0) {
        return "";
    }
    else {
        let Reverce = str[n - 1] + ReverrceStringWithRecursion(str, n - 1);
        return Reverce;
    }

}

function runProgram(input) {

    let n = input.length;
    let ans = ReverrceStringWithRecursion(input, n);
    console.log(ans.trim());

}


if (process.env.USERNAME === "shiva") {
    runProgram(`Masai School`);
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

