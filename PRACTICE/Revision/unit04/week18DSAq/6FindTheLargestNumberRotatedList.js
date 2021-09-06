
function MinimumSorted(arr) {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (arr[low] < arr[mid]) {
            low = mid;
        } else if (arr[low] > arr[mid]) {
            high = mid - 1;
        } else {
            low = low + 1;
        }

    }

    return arr[low];
}


function runProgram(input) {

    var newData = input.split("\n");
    let arr = newData[1].trim().split(" ").map(Number);

    let ans = MinimumSorted(arr);
    console.log(ans);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5
5 6 8 2 3 4`);
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
