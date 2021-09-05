
function givrFloor(num) {

    let str = String(num)
    let res = str.split(".")
    return Number(res[0]);

}


function SquareRoot(num) {

    if (num == 0 || num == 1) {
        return num;
    }

    let low = 1;
    let high = num;
    let res;

    while (low <= high) {

        let mid = givrFloor((low + high) / 2);

        if (mid * mid == num) {
            return mid;
        }

        if (mid * mid < num) {
            low = mid + 1;
            res = mid;
        }

        else {
            high = mid - 1;
        }
    }
    return res;
}



function runProgram(input) {

    var newData = input.split("\n");

    let res = ""
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let num = Number(newData[i]);
        let ans = SquareRoot(num);
        res += ans + "\n";
    }
    console.log(res);
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
4
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
