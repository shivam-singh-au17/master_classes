// function runProgram(input) {

//     var newInput = Number(input);

//     //   TODO:

// }

// if (process.env.USERNAME === "shiva") {
//     runProgram(`5
// 3 4 2 0 1`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
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

var arr = [3, 4, 2, 0, 1];

function findIndex2(items) {
    var present2OrNot = true
  
    for (var i = 0; i < items.length; i++) {
        if (items[i] == 2 && items[items.length - 1] != 2) {
            present2OrNot = items[i + 1]
        }
        // else if (items[items.length - 1] != 2) {
        //     present2OrNot = false
        // }
    }
    return present2OrNot
}

var ans = findIndex2(arr);
console.log(ans);