// TODO:

function lowerBound(arr, key, low, high) {

    if (low > high) {
        return -1
    }
    let mid = Math.floor((low + high) / 2)

    if (key < arr[mid]) {
        return lowerBound(arr, key, low, mid - 1)
    } else if (key > arr[mid]) {
        return lowerBound(arr, key, mid + 1, high)
    } else {
        return mid
    }

}


function runProgram(input) {

    var newData = input.split("\n");
    let NandK = newData[0].split(" ").map(Number);

    let K = NandK[1];
    let arr = newData[1].trim().split(" ").map(Number);
    let low = 0;
    let high = arr.length - 1;
    let ans = lowerBound(arr, K, low, high);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5 2
1 1 2 2 5`);
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


// FIXME: