

function searchArr(arr, key) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === key) {
            return mid;
        }
        else if (arr[mid] >= arr[low]) {
            if (key >= arr[low] && key < arr[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        else {
            if (key > arr[mid] && key <= arr[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}


function runProgram(input) {

    var newData = input.split("\n");

    let NandK = newData[0].split(" ").map(Number);
    let K = NandK[1];
    let arr = newData[1].trim().split(" ").map(Number);

    let ans = searchArr(arr, K);
    console.log(ans);


}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5 1
3 4 5 1 2`);
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


