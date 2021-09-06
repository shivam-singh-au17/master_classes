
function findPeakElement(arr) {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        }
        if (arr[mid] > arr[mid + 1]) {
            high = mid;
        }
    }
    return low;
};


function runProgram(input) {

    var newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {

        let arr = newData[i * 2].trim().split(" ").map(Number);

        let ans = findPeakElement(arr);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
10 20 11
5
1 3 6 5 4`);
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


