

function DetectPalindrome(str) {

    let stk = [str[0]];
    for (let i = 1; i < str.length; i++) {
        if (str[i] == stk[stk.length-1]) {
            stk.pop();
        } else {
            stk.push(str[i])
        }
    }
    if (stk.length == 0 || stk.length == 1) {
        console.log("Possible!");
    } else {
        console.log("Not Possible!");
    }

}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= testCases; i++) {
        DetectPalindrome(newInput[i*2].split("").sort())
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
6
giggbgb
5
aabcd`);
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

