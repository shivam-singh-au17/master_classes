
function GCDEasy(items1, items2) {
    var result = ""
    for (i = 0; i <= items1; i++) {
        if (items1 % i == 0 && items2 % i == 0) {
            result = i
        }
    }
    return result;
}

function runProgram(input) {

    var newInp = input.split(" ").map(Number);

    var ans = GCDEasy(newInp[0], newInp[1]);
    console.log(ans);
    
}

if (process.env.USERNAME === "shiva") {
    runProgram(`51 68`);
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



















// function runProgram(input) {
//     var newInput = input.split(" ");
//     var a = Number(newInput[0]);
//     var b = Number(newInput[1]);
//     var result = ""
//     for (i = 0; i <= a; i++) {
//         if (a % i == 0 && b % i == 0) {
//             result = i
//         }
//     }
//     console.log(result);
// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "")
//     runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "")
//     runProgram(read);
//     process.exit(0);
// });