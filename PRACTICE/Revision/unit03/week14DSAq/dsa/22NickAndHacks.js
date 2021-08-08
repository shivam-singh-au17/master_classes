
function NickHacks(num, nick) {
    console.log(nick);
    if (num == nick) {
        return "Yes";
    }
    if (nick > num) {
        return "No"
    }
    else {
        return (NickHacks(num, nick * 10) || NickHacks(num, nick * 20))
    }
}


function runProgram(input) {

    var Input = input.trim().split("\n");
    let testCases = Number(Input[0]);
    for (let i = 1; i <= testCases; i++) {
        var num = Number(Input[i]);

        let nick = 1;
        let ans = NickHacks(num, nick);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
200
2
10
25
200`);
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

