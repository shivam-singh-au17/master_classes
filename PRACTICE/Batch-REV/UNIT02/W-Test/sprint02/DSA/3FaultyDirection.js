
function FaultyString(str) {

    var x = 0;
    var y = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'L') {
            x++;
        } else if (str[i] == 'R') {
            x--;
        } else if (str[i] == 'U') {
            y++;
        } else if (str[i] == 'D') {
            y--;
        }
    }

    if (x == 0 && y == 0) {
        return 'Yes'
    } else {
        return 'No'
    }

}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var str = Input[i * 2];

        var ans = FaultyString(str);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
RLRUD
4
LRUD`);
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

