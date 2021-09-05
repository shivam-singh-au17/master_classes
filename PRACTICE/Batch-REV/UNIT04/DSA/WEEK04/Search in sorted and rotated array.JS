function runProgram(input) {

    var input = input.split("\n");
    var n = input[0].split(" ").map(Number);
    var length = n[0];
    var k = n[1];
    var arr = input[1].split(" ").map(Number);
    function find(arr, k) {
        var start = 0;
        var end = arr.length - 1;
        while (start <= end) {
            if (arr[start] == k) {
                return start;
            }
            if (arr[start] != k) {
                start++;
            } else {
                return "-1";
            }
        }
        return "-1";
    }
    console.log(find(arr, k));

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