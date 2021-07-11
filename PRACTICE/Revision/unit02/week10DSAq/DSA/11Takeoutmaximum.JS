
function TakeOutMaximum(arr, k) {

    var kSum = 0;
    for (var i = 0; i < k; i++) {
        kSum += arr[i];
    }

    var sum = kSum;
    for (var i = k; i < arr.length; i++) {
        kSum += arr[i] - arr[i - k];
        sum = Math.max(sum, kSum);

    }
    return sum;
}


function runProgram(input) {

    var Input = input.split("\n");

    var nAndK = Input[0].trim().split(" ").map(Number);
    var k = nAndK[1];
    var arr = Input[1].trim().split(" ").map(Number);

    var ans = TakeOutMaximum(arr, k);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
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