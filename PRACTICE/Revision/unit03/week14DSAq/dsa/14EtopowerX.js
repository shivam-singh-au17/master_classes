
var temp1 = 1
var temp2 = 1;

function EtopowerX(x, n) {

    var res;

    if (n == 0) {
        return 1;
    }

    res = EtopowerX(x, n - 1);

    temp1 = temp1 * x;
    temp2 = temp2 * n;

    return (res + temp1 / temp2);

}


function runProgram(input) {

    var nAndk = input.split(" ").map(Number);
    var x = nAndk[0]
    var n = nAndk[1]

    var res = EtopowerX(x, n);
    console.log(res.toFixed(4));

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


