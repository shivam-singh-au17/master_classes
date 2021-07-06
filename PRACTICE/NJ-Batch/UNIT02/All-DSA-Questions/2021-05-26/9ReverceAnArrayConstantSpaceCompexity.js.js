function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var array = input[1].split(" ").map(Number);

    function riverse(arr) {
        var left = 0;
        var right = n - 1;
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;

        }
        return arr;
    }
    var x = riverse(array);
    var res = ""
    for (let i = 0; i < x.length; i++) {
        res += x[i] + " "

    }
    console.log(res);
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