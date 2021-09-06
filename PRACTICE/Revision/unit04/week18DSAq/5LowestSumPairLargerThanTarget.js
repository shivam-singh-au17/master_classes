
function solve(arr, target) {

    arr.sort((a, b) => { return a - b });

    let low = 0;
    let high = arr.length - 1;

    let ans = Number.MAX_VALUE;

    while (low < high) {
        if (arr[low] + arr[high] > target) {
            ans = Math.min(arr[low] + arr[high], ans);
            high--;
        } else {
            low++;
        }
    }
    return ans;
}


function runProgram(input) {

    var newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let NandK = newData[i * 2 - 1].trim().split(" ").map(Number);
        let target = NandK[1]
        let arr = newData[i * 2].trim().split(" ").map(Number);
        let ans = solve(arr, target)
        console.log(ans);

    }
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
5 8
1 3 5 9 13`);
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

