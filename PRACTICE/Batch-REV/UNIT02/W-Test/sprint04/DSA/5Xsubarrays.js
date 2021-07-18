
function XSubarrays(arr, k, x) {

    let p1 = 0
    let p2 = p1 + x - 1
    let flag = 0
    let ctr = 0
    while (p2 < arr.length) {
        flag = 0
        for (var i = p1; i < (p2 + 1); i++) {
            if (arr[i] > k) {
                flag = 1
                break;
            }
        }
        p1 += 1
        p2 += 1
        if (flag == 1) {
            continue;
        }
        ctr += 1
    }

    return ctr;
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
1 3 2 3 1`);
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