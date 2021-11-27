
function SuchPairReturns(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        if (arr[low] + arr[high] > k) {
            high--;
        } else if (arr[low] + arr[high] < k) {
            low++;
        } else {
            return 1;
        }
    }
    return -1
}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0])
    for (let i = 1; i <= testCases; i++) {
        let nANDk = newInput[i * 2 - 1].split(" ").map(Number);
        let k = nANDk[1];
        let arr = newInput[i * 2].split(" ").map(Number);
        arr.sort((a, b) => { return a - b });
        console.log(SuchPairReturns(arr, k) )

    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
5 12
3 4 0 2 7`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\len$/, "");
        read = read.replace(/\len$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\len$/, "");
        runProgram(read);
        process.exit(0);
    });
}

