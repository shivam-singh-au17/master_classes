function runProgram(input) {
    var input = input.split("\n");
    var l = Number(input[0]);

    var arr = input[1].split(" ").map(Number)
    function findProduct(arr, l) {
        if (l <= 0) {
            return 1
        }

        return findProduct(arr, l - 1) * arr[l - 1]
    }
    var x = findProduct(arr, l);
    console.log(x)
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