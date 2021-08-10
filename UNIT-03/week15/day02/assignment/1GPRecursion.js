
var temp1 = 1
var temp2 = 1;

function EtopowerX(n, r) {

    var res;

    if (r == 0) {
        return 1;
    }

    res = EtopowerX(n, r - 1);

    temp1 = temp1 / n;
    temp2 = temp2 / r;

    return (res + temp1 * temp2);

}


function runProgram(input) {

    var nAndk = input.split(" ").map(Number);
    var n = nAndk[0]
    var r = nAndk[1]

    var res = EtopowerX(n, r);
    console.log(res.toFixed(4));

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 5`);
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


