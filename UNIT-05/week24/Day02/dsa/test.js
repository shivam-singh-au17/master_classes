

function findSubarray(arr, sum) {
    let start = 0;
    let currSum = arr[0];

    for (let i = 1; i <= arr.length; i++) {
        while (currSum > sum) {
            currSum -= arr[start];
            start++;
        }
        if (currSum == sum) {
            console.log(start + " " + (i - 1) + " index");
            start = i;
            currSum = 0;
        }
        if (i < arr.length) {
            currSum += arr[i];
        }

    }
}








function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= testCases; i++) {
        let NandK = newInput[i * 2 - 1].trim().split(" ").map(Number);
        let K = NandK[1]
        let arr = newInput[i * 2].trim().split(" ").map(Number);
        findSubarray(arr, K)

    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1`);
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

