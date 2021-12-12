

function findSubarray(arr, n, k) {
    let sum = 0;
    for (let i = n - 1; i < k; i++) {
        sum += arr[i]
    }
    return sum;
}


function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].trim().split(" ").map(Number);
    let testCases = Number(newInput[2]) + 2;
    for (let i = 3; i <= testCases; i++) {
        let NandK = newInput[i].trim().split(" ").map(Number);
        let N = NandK[0];
        let K = NandK[1];
        console.log(findSubarray(arr, N, K));
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4
3 2 1 5
4
1 3
2 4
1 4
3 3`);
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

