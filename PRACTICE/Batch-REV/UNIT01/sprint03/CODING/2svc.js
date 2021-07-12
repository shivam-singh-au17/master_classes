
function findVovels(str) {
    var res1 = "";
    var res2 = "";
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            res1 += str[i]
        } else {
            res2 += str[i]
        }
    }
    result += res1 + res2;
    return result;
}

function runProgram(input) {

    var Input = input;

    var ans1 = findVovels(Input);
    console.log(ans1);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`rutwik`);
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
//     var newInput = input.split("\n");
//     var t = Number(newInput[0]);

//     for (var a = 1; a <= t; a++) {
//         var arr = newInput[2 * a].split("");
//         var res1 = "";
//         var res2 = "";
//         var result = "";
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
//                 res1 = res1 + arr[i];

//             } else {
//                 res2 = res2 + arr[i];
//             }
//         }
//         result = result + res1 + res2;
//         console.log(result);
//     }

// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
// });
// process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
// });
