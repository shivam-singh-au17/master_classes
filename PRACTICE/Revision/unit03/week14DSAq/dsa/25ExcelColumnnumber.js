

function colamNum(str) {

    var res = 0;
    for (let i = 0; i < str.length; i++) {
        res *= 26;
        res += str[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;

    }

    return res;
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var str = Input[i];

        var ans = colamNum(str);
        console.log(ans);
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
    let read = "";
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
