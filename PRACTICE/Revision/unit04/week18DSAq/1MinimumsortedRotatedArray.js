
function MinimumSorted(arr) {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
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

if (process.env.USERNAME === "shiva") {
    runProgram(`10
1 1 1 1 1 1 1 1 1 1 1`);
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


