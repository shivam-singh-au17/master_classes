
function SuchPairReturns(arr, k) {
    var res = 0;
    var temp = arr[0]
    var count = 0
    for (var i = 1; i <= arr.length; i++) {
        if ((arr[i] + temp) == k) {
            count++;
        } else {
            res = count;
            temp = arr[i]
            // count = 0
        }
    }
    return res;
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var nAndK = Input[i * 2 - 1].trim().split(" ").map(Number);
        var k = nAndK[1]
        console.log('k:', k)
        var arr = Input[i * 2].trim().split(" ").map(Number);
        console.log('arr:', arr)

        var ans = SuchPairReturns(arr, k);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
5 11
3 4 0 2 7`);
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
