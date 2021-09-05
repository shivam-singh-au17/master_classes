function runProgram(input) {

    var input = input.split("\n");
    var t = +input[0];
    for (let i = 0; i < t; i++) {
        var lenghth = input[2 * i + 1].split(" ").map(Number);
        var n = lenghth[0];
        var k = lenghth[1];
        var arr = input[2 * i + 2].split(" ").map(Number);

        function minimizeWithKSwaps(arr, n, k) {
            for (let i = 0; i < n - 1 && k > 0; ++i) {
                let pos = i;
                for (let j = i + 1; j < n; ++j) {
                    if (j - i > k) break;

                    if (arr[j] < arr[pos]) pos = j;
                }

                let temp;

                for (let j = pos; j > i; --j) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }

                k -= pos - i;
            }
        }
        minimizeWithKSwaps(arr, n, k);
        var res = ""
        for (let i = 0; i < n; ++i) {
            res += arr[i] + " "
        }
        console.log(res)
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