function OptimiseCurve(A, B, C, K) {

    let temp = Number.MAX_VALUE;

    if (K <= C)
        return -1;

    let high = K - C;
    let low = 0;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if ((A * mid * mid) + (B * mid) > (K - C)) {
            temp = Math.min(temp, mid);
            high = mid - 1;
        }
        else if ((A * mid * mid) + (B * mid) < (K - C))
            low = mid + 1;
        else
            return mid;
    }

    return temp;
}
function runProgram(input) {

    var newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let arr = newData[i].trim().split(" ").map(Number);
        let A = arr[0]
        let B = arr[1]
        let C = arr[2]
        let K = arr[3]

        let ans = OptimiseCurve(A, B, C, K);
        console.log(ans);

    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2 5
2 3`);
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