
function isKthBitSet(N, K) {

    var i = 1;
    var store = i << K

    var res = N & store;

    if (res == 0) {
        console.log("NO");
    } else {
        console.log("Yes");
    }

}



function runProgram(input) {

    var input = input.split("\n");
    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {

        var NandK = input[i].split(" ").map(Number);
        var N = NandK[0];
        var K = NandK[1];

        isKthBitSet(N, K)
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 0
5 2
4 1
9 1
4 0`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\N$/, "");
        read = read.replace(/\N$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\N$/, "");
        runProgram(read);
        process.exit(0);
    });
}
