

function ImplementGCD(a, b) {

    if (!b) {
        return a;
    }
    return ImplementGCD(b, a % b);
}



function runProgram(input) {

    var Input = input.trim().split("\n");
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {
        var num = Input[i].split(" ").map(Number);
        var a = num[0]
        var b = num[1]

        let ans = ImplementGCD(a, b);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
265974783 154274012
699535256 895330594
813164300 144820
640771391 159913
93805471 69718324
999999999 999999998
613523760 91955
248799319 505008758
707062645 91219220
902791288 185836`);
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
