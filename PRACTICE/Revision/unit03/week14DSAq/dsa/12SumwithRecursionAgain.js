

function runProgram(input) {
    var input = input.split("\n");
    var t = +input[0];
    for (let i = 0; i < t; i++) {
        var n = input[2 * i + 1].split(" ").map(Number);
        var arr = input[2 * i + 2].split(" ").map(Number);
        function sub(arr) {
            if (arr.length == 1) {
                return 0;
            }
            else {
                var sum = arr.length;

                return Math.abs(arr[1] - arr[0]) + sub(arr.slice(1));

            }
        }
        console.log(sub(arr))
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});