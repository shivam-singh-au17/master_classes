
function EasyButRecursion(arr, n) {

    if (n <= 0) {
        return 0;
    }
    else {
        let sum = arr[n - 1] + EasyButRecursion(arr, n - 1);
        return sum;
    }

}

function runProgram(input) {

    var input = input.trim().split("\n");
    var testCases = Number(input[0]);
    for (let i = 1; i <= testCases; i++) {

        let arr = input[i * 2].trim().split(" ").map(Number);
        let n = arr.length;

        let ans = EasyButRecursion(arr, n);
        console.log(ans);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
4 6 9 3 2
5
6 3 8 2 -4`);
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

