

function isOperand(x) {
    return (x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z');
}

function getInfix(exp) {
    let stk = [];

    for (let i = 0; i < exp.length; i++) {

        if (isOperand(exp[i])) {
            stk.push(exp[i] + "");
        }
        else {
            let op1 = stk.pop();
            let op2 = stk.pop();
            stk.pop();
            stk.push("(" + op2 + exp[i] + op1 + ")");
        }
    }
    return stk[stk.length - 1];
}


function runProgram(input) {

    console.log(getInfix(input));

}

if (process.env.USERNAME === "shiva") {
    runProgram(`ab+c-def-*g/+hij/*+`);
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

