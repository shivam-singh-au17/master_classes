
function findLongest(arr, k) {
    let res = ""
    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];
        for (let j = 0; j < k; j++) {
            if (arr[i + j] > max) {
                max = arr[i + j];
            }
        }
        res += max + " ";
    }
    return res;
}


function runProgram(input) {

    var newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let NandK = newData[i * 2 - 1].trim().split(" ").map(Number);
        let K = NandK[1];
        let arr = newData[i * 2].trim().split(" ").map(Number);

        let ans = findLongest(arr, K);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
9 3
1 2 3 1 4 5 2 3 6`);
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