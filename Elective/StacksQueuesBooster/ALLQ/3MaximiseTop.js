
let stack = [];
let mins = [];

function push(data) {
    stack.push(x);
    if (mins.length != 0 || x <= mins.length - 1) {
        mins.push(x);
    }
}

function pop() {
    if (!mins.length != 0) {
        temp = stack.pop();
        if (temp == mins.length - 1) {
            mins.pop();
        }
    }
}

function getMin() {
    return mins.length - 1;
}



function maximiseTop(arr, K) {
    arr.reverse()
    let stack = [];
    for (let i = 0; i < K; i++) {
        if (i % 2 == 1) {
            stack.push(arr[i]);
        } else {
            stack.pop();
        }
    }
    if (stack.length != 0) {
        return stack[stack.length - 1];
    } else {
        return -1;
    }
}

function runProgram(input) {

    let Input = input.trim().split("\n");
    let NandK = Input[0].trim().split(" ").map(Number);
    let K = NandK[1];
    let arr = Input[1].trim().split(" ").map(Number);

    let ans = maximiseTop(arr, K);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6 4
1 2 4 3 3 5`);
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