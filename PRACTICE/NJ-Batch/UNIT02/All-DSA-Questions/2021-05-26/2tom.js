function runProgram(input) {
    var input = input.split("\n");
    var a = input[0].split(" ").map(Number);
    var length = a[0];
    var k = a[1];
    var array = input[1].split(" ").map(Number);
    function sum(arr, k) {
        if (k > arr.length) {
            return false;
        }
        var sum = 0;
        for (let i = 0; i < k; i++) {
            sum += array[i];

        }
        var res = sum;
        for (let i = k; i < array.length; i++) {
            sum += array[i] - array[i - k];
            res = Math.max(sum, res);
        }
        return res;
    }
    console.log(sum(array, k));
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
});//Enter code here