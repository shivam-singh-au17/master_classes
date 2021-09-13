function LowerBound(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let res = 0;

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
    let res = 0;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (key < arr[mid]) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
}



function runProgram(input) {

    let newData = input.split("\n");

    let arr = newData[1].split(" ").map(Number);

    let testCases = Number(newData[2]);

    for (let i = 3; i <= testCases + 2; i++) {

        let NandK = newData[i].split(" ").map(Number);
        let N = NandK[0];
        let K = NandK[1];

        if (N == 0) {
            console.log(LowerBound(arr, K));
        } else if (N == 1) {
            console.log(UpperBound(arr, K) - LowerBound(arr, K));
        }

    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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