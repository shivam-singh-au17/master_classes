function searchArr(arr, key) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (key < arr[mid])
            high = mid - 1;
        else if (key > arr[mid])
            low = mid + 1;
        else
            return true;
    }
    return false;

}

function findPair(arr, sum) {

    arr.sort(function (a, b) { return a - b });
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        res = searchArr(arr, sum - arr[i])
        if (res == true) {
            count++;
        }
    }
    if (count > 1) {
        return 1;
    } else {
        return -1
    }
}



function runProgram(input) {

    var newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let NandK = newData[i * 2 - 1].split(" ").map(Number);
        let K = NandK[1];
        let arr = newData[i * 2].trim().split(" ").map(Number);

        let ans = findPair(arr, K);
        console.log(ans);

    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`10
3 -9
-1 3 -1
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5
4 -9
-2 2 0 -4
2 3
0 0
8 2
5 -6 7 6 0 3 -4 8
1 -7
0
8 -6
4 7 4 -1 5 4 -6 -8
6 4
6 -1 -5 -5 2 -5
4 -4
0 -1 3 -2
1 3
-1`);
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