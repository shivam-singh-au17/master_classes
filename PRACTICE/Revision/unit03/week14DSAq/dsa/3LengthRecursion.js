
function LengthRecursion(str) {

    if (str == "") {
        return 0;
    }
    else {
        let res = LengthRecursion(str.substring(1)) + 1;
        return res;
    }

}

function runProgram(input) {

    let ans = LengthRecursion(input);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`masaischool`);
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

