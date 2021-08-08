
function BinaryEquivalent(num) {

    if (num == 0) {
        return "";
    }
    else {
       return BinaryEquivalent(Math.floor(num / 2)) + ""+ num % 2
    }
}


function runProgram(input) {

    var Input = input.trim().split("\n");
    let testCases = Number(Input[0]);
    for (let i = 1; i <= testCases; i++) {
        var num = Number(Input[i]);

        let ans = BinaryEquivalent(num);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`9
49301
99864
22929
94209
57010
43022
2894
78255
64788`);
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

