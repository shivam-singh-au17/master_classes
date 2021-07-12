
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



















// 2nd mathod




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
});