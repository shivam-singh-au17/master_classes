
function ColumnNumber(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++){
        res *= 26;
        res += str[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }

    return res;
}



function runProgram(input) {

    let Input = input.split("\n");
    let testcases = Number(Input[0]);

    for (let i = 1; i <= testcases; i++) {

        let str = Input[i];

        let ans = ColumnNumber(str);
        console.log(ans)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
A
AB
ZY`);
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