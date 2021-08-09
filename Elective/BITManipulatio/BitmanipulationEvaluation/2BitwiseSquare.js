
function BitwiseSquare(num) {

    if (num < 0)
        num = -num;
    let res = num;

    for (let i = 1; i < num; i++)
        res += num;

    return res;

}




function runProgram(input) {

    var input = input.split("\n");
    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {

        var num = Number(input[i])

        var ans = BitwiseSquare(num);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
6`);
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


