function givrFloor(num) {

    let str = String(num)
    let res = str.split(".")
    return Number(res[0]);

}


function SquareRoot(num) {

    let low = 0;
    let high = num;

    while (low < high) {

        let mid = givrFloor(low + (high - low) / 2);

        if (mid * mid <= num) {
            low = mid + 1;
        } else {
            high = mid;
        }

    }
    if (num == 1) {
        return 1;
    } else {
        return low - 1;
    }
}


function runProgram(input) {

    var newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let num = Number(newData[i])
        let ans = SquareRoot(num);
        console.log(ans);

    }
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
1
8`);
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
