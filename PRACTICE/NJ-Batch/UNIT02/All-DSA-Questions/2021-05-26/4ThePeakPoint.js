
function ThePeakPoint(arr) {
    var peak = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            peak = i;
        }
    }
    return peak;
}


function runProgram(input) {

    var data = input.split("\n");
    var testCases = Number(data[0]);
    for (var i = 1; i <= testCases; i++) {
        var newData = data[i * 2].split(" ").map(Number);
        var ans = ThePeakPoint(newData);
        console.log(ans)
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
    let read = "";
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

