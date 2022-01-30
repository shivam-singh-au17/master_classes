


function CountChars(str) {
    let count = 1;
    let temp = str[0];
    let res = "";
    for (let i = 1; i <= str.length; i++) {
        if (str[i] == temp) {
            count++;
        } else {
            res += str[i - 1] + count;
            temp = str[i];
            count = 1;
        }
    }
    return res;
}


function runProgram(input) {
    let str = input;
    console.log(CountChars(str))
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`aaabbbbcc`);
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


