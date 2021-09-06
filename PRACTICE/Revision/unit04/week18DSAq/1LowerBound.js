
function LowerBound(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let res = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high- low) / 2);

        if (key == arr[mid]) {
            res = mid;
            high = mid - 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
    return res;
}

function runProgram(input) {

    var newData = input.split("\n");

    let NandK = newData[0].split(" ").map(Number);
    let K = NandK[1];

    let arr = newData[1].trim().split(" ").map(Number);

    let ans = LowerBound(arr, K);
    console.log(ans);

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`10 7
0 2 4 4 5 5 7 7 9 10`);
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
