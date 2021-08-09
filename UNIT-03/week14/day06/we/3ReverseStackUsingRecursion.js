

function runProgram(input) {

    var Input = input.trim().split("\n");

    let stack = [];

    function appendMathod(x) {
        if (stack.length == 0) {
            stack.push(x);
        }
        else {
            let a = stack.pop();
            appendMathod(x);
            stack.push(a);
        }

    }

    function reverseMathod() {
        if (stack.length > 0) {
            let x = stack.pop();
            reverseMathod();
            appendMathod(x);
        }
    }

    for (let i = 0; i <= Infinity; i++) {
        var num = Number(Input[i])
        if (num != -1) {
            stack.push(num)
        } else {
            reverseMathod()
            for (let j = 0; j < stack.length; j++){
                console.log(stack[j]);
            }
            break
        }
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
2
3
4
-1`);
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
