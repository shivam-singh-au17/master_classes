
function MinimumOperations(arr) {

    var n = arr.length;
    var sum = 0;
    var min = arr[0];

    for (var i = 0; i < n; i++) {
        sum += arr[i];

        if (arr[i] < min) {
            min = arr[i];
        }

    }
    return sum - (n * min);

}


function runProgram(input) {

    var data = input.split("\n");

    var arr = data[1].split(" ").map(Number);

    var result = MinimumOperations(arr);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1 2 3`);
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

