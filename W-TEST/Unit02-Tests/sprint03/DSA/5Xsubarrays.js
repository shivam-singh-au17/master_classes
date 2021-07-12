
function XSubarrays(arr, k, x) {

    var kNum = true;
    for (var i = 0; i < k; i++) {
        if (arr[i] > x) {
            kNum += false;
        }
    }

    var temp = kNum;
    for (var i = k; i < arr.length; i++) {
        kNum += arr[i] - arr[i - k];
        temp = Math.max(temp, kNum);

    }
    return temp;
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var nAndK = Input[i * 2 - 1].trim().split(" ").map(Number);
        var k = nAndK[1];
        var x = nAndK[2];
        var arr = Input[i * 2].trim().split(" ").map(Number);

        var ans = XSubarrays(arr, k, x);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
5 3 2
1 3 2 5 1`);
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