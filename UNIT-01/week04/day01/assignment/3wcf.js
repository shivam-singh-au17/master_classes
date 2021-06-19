
function highNum(parameter1, parameter2) {

    var result = false;
    for (var i = 0; i < parameter1.length; i++) {
        for (var j = 0; j < parameter2.length; j++) {
            if (i == j) {
                if (parameter1[i] < parameter2[j]) {
                    result = true;
                }
            }
        }
    }
    return result
}

function printResult(ans) {
    if (ans == true) {
        return "England";
    } else {
        return "New Zealand";
    }
}

function runProgram(input) {

    var newInput = input.split("\n");
    var parameter1 = newInput[0].split(" ").map(Number);
    var parameter2 = newInput[1].split(" ").map(Number);

    var winTeam = highNum(parameter1, parameter2);
    var ans = printResult(winTeam)
    console.log(ans);
}
if (process.env.USERNAME === "shiva") {
    runProgram(`241 15 21
241 15 26`);
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
