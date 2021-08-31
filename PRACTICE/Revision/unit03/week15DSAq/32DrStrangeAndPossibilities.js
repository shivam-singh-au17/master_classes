
// FIXME:

function allSubset(k, ans) {
    if (ans <= 0) {
        return 0;
    } else {
        return k + allSubset(k + 1, ans - 1)
    }
}


function runProgram(input) {

    var nAndk = Number(input)

    let ans = allSubset(nAndk)
    console.log('ans:', 1, ans)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3`);
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
