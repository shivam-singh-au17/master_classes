
function NumberOfWays(num) {

    if (num == 1 || num == 0) {
        return 1;
    }else if (num == 2) {
        return 2;
    } else {
        let ans = NumberOfWays(num - 3) + NumberOfWays(num - 2) + NumberOfWays(num - 1);
        return ans;
    }
}


function runProgram(input) {

    var input = Number(input);

    let ans = NumberOfWays(input);
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`4`);
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

