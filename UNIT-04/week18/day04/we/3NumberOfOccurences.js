
function LowerBound(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let res = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (key == arr[mid]) {
            res = mid;
            high = mid - 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
    return res;
}


function UpperBound(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let res = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (key == arr[mid]) {
            res = mid;
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
    return res;
}


function runProgram(input) {

    var newData = input.split("\n");

    let NandK = newData[0].split(" ").map(Number);
    let K = NandK[1];

    let arr = newData[1].trim().split(" ").map(Number);

    let lower = LowerBound(arr, K);
    let upper = UpperBound(arr, K);
    let ans = (upper - lower) + 1;
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`10 22
2 2 2 2 2 11 15 18 20 22`);
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
