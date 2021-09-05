
function searchArr(arr, key) {

    arr.sort(function (a, b) { return a - b });
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (key < arr[mid])
            high = mid - 1;
        else if (key > arr[mid])
            low = mid + 1;
        else
            return mid;
    }
    return -1;

}



function runProgram(input) {

    var newData = input.split("\n");

    let NandK = newData[0].split(" ").map(Number);
    let K = NandK[1];

    let arr = newData[1].trim().split(" ").map(Number);

    let ans = searchArr(arr, K);
    if (ans != -1) {
        console.log(1);
    } else {
        console.log(-1);
    }

}


if (process.env.USERNAME === "shiva") {
    runProgram(`5 2
8 4 1 9 11`);
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
