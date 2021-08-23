
let temp1 = 1;
let temp2 = 1;

function EtopowerX(x, n) {

    let res;

    if (n == 0) {
        return 1;
    }

    res = EtopowerX(x, n - 1);

    temp1 = temp1 * x;
    temp2 = temp2 * n;

    return (res + temp1 / temp2);

}


function runProgram(input) {

    let InputXandN = input.split(" ").map(Number);
    let X = InputXandN[0];
    let N = InputXandN[1];
    let ans = EtopowerX(X, N).toFixed(4);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 2`);
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
