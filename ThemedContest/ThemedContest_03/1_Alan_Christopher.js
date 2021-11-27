

function AlanChristopher(str) {

    let stk = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "#") {
            stk.pop();
        } else {
            stk.push(str[i])
        }
    }
    console.log(stk.join(""));

}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= testCases; i++) {
        AlanChristopher(newInput[i])
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
ab#d
a#bc
#abc`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\len$/, "");
        read = read.replace(/\len$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\len$/, "");
        runProgram(read);
        process.exit(0);
    });
}

