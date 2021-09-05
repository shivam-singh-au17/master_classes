

let stack = [];
let mins = [];

function Push(x) {
    stack.push(x);
    if (mins.length == 0 || x <= mins.shift()) {
        mins.push(x);
    }
}
function Pop() {
    if (!stack.length == 0) {
        temp = stack.pop();
        if (temp == mins.shift()) {
            mins.pop();
        }
    }
}

function getMin() {
    return mins.shift();
}

Push(5)
Push(3)
Push(8)
Pop()
console.log(getMin());
// getMin()
console.log(stack);
console.log(mins);

// function runProgram(input) {

//     var newData = input.split("\n");
//     let testCases = Number(newData[0]);

//     for (let i = 1; i <= testCases; i++) {

//         let NandK = newData[i].split(" ");
//         let N = NandK[0];
//         console.log('N:', N)
//         let K = Number(NandK[1]);
//         console.log('K:', K)

//         if (N == "push") {
//             Push(K);
//         } else if (N == "getMin") {
//             console.log(getMin());
//         }else if (N == "pop") {
//             Pop()
//         }

//     }

// }

// if (process.env.USERNAME === "shiva") {
//     runProgram(`8
// push 5
// push 3
// push 1
// getMin
// pop
// getMin
// pop
// getMin`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     var read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }