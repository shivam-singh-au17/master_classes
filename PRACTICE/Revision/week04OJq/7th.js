function Palindrome(item1) {
    var res = "";
    for (var i = item1.length - 1; i >= 0; i--) {
        res += item1[i]
    }
    return res;
}

function printResult(item1 ,res) {
    if (res == item1) {
        return 'Yes';
    } else {
        return 'No';
    }
}

function runProgram(input) {

    var Input = input;

    var ans1 = Palindrome(Input);
    var ans2 = printResult(Input ,ans1);
    console.log(ans2);
}

if (process.env.USERNAME === "shiva") {
    runProgram(`1221`);
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