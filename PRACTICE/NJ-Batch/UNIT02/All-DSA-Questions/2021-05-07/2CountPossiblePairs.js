
function CountPairs(arr) {
    var n = arr[0]
    var m = arr[1]
    var count = 0;
    for (var x = 0; x < 1000; x++) {
        for (var y = 0; y < 1000; y++) {
            if (x ** 2 + y == n && y ** 2 + x == m) {
                count++;
            }
        }
    }
    return count;
}

function runProgram(input) {

    var Input = input.split("\n");

    var nums = Input[0].split(" ").map(Number);

    var ans = CountPairs(nums);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`9 3`);
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
