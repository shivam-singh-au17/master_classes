
// function PowerFunction(x, y) {

//     if (y == 0) {
//         return 1;
//     }
//     if (x == 0) {
//         return 0;
//     } else {
//         let ans = x * PowerFunction(x, y - 1);
//         return ans;
//     }

// }

// function runProgram(input) {

//     var input = input.split(" ").map(Number);
//     let a = input[0];
//     let b = input[1];

//     let ans = PowerFunction(a, b);
//     console.log(ans);


// }


// if (process.env.USERNAME === "shiva") {
//     runProgram(`2 4`);
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



// function PowerFunction(x, y) {

//     if (y == 0) {
//         return 1;
//     }
//     if (y == 1) {
//         return x;
//     } else {
//         let ans = x * PowerFunction(x, y - 1);
//         return ans;
//     }

// }

// console.log(PowerFunction(2, 4));