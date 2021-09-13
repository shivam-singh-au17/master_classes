

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
            return "YES";
    }
    return "NO";

}


function runProgram(input) {

    var newData = input.split("\n");
    let NandTC = newData[0].split(" ").map(Number);
    let testCases = NandTC[1];
    let arr = newData[1].trim().split(" ").map(Number);
    arr.sort(function (a, b) { return a - b });

    for (let i = 2; i <= testCases + 1; i++) {

        let query = Number(newData[i]);
        let ans = searchArr(arr, query);
        console.log(ans)

    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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