var contStrSum = function (str) {

    var smaLet = 'abcdefghijklmnopqrstuvwxyz'
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < smaLet.length; j++) {
            if (str[i] == smaLet[j]) {
                sum += j + 1
            }
        }
    }
    return sum;
}


function runProgram(input) {

    var Input = input;

    var res = contStrSum(Input);
    console.log(res);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`aba`);
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

