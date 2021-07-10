
function TakeMaximum(arr, k) {
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += arr[i];
    }

    console.log(sum);

    var res = sum;
    for (var i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        res = Math.max(sum, res);
    }
    return res;

}


function runProgram(input) {

    var input = input.split("\n");

    var num = input[0].split(" ").map(Number);
    var k = num[1]

    var arr = input[1].split(" ").map(Number);

    var ans = TakeMaximum(arr, k);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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