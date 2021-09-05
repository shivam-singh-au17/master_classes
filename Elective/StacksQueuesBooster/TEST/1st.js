function findRes(str) {
    let length;
    let stack = [];
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            stack.push(str[i]);
        } else {
            if (stack.length == 0) {
                temp = 1;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length == 0 && temp == 0) {
        console.log("yes");
    } else if (temp == 1) {
        console.log("no");
    } else {
        console.log("no");
    }
}


function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {
        let str = Input[i * 2];
        findRes(str)
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
2 2
()()
3 9
()))))))())(
2 10
)(()))))))))
9 2
(())(((((((`);
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