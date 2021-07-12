function SuchPairReturns(arr, k) {
    arr.sort(function (a, b) { return a - b });
    var p1 = 0;
    var p2 = arr.length - 1;
    var temp = false;
    while (p1 < p2) {
        if ((arr[p1] + arr[p2]) > k) {
            p2--;
        }
        else if
            ((arr[p1] + arr[p2]) < k) {
            p1++;
        }
        else {
            temp = true;
            break;
        }
    }

    if (temp == true) {
        return 1;
    } else {
        return -1;
    }

}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var nAndK = Input[i * 2 - 1].trim().split(" ").map(Number);
        var k = nAndK[1];
        var arr = Input[i * 2].trim().split(" ").map(Number);

        var ans = SuchPairReturns(arr, k);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5`);
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