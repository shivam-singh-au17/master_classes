

// function findSubstring(str) {

//     for (let i = 0; i < str.length; i++) {
//         let res = ""
//         for (let j = i; j < str.length; j++) {
//             res += str[j];
//             if (res[0] == res[res.length - 1] && res.length > 1) {
//                 console.log(res);
//             }
//         }
//     }
// }


// function runProgram(input) {

//     let data = input.split("\n");
//     let testCases = Number(data[0]);
//     for (let i = 1; i <= testCases; i++) {
//         let str = data[i];
//         findSubstring(str)
//     }

// }

// if (process.env.USERNAME === "Jay Mahakaal") {
//     runProgram(`1
// shisvams`);
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








function findSubstring(str) {
    let low = 0;
    let high = str.length - 1;
    let res = "";
    function printRes(res, str, low, high) {
        if (low <= high + 1 && res != "") {
            console.log(res);
        }
        for (let i = low; i <= high; i++) {
            printRes(res + str[i], str, i + 1, high);
        }
    }
    return printRes(res, str, low, high)
}


function runProgram(input) {

    let data = input.split("\n");
    let testCases = Number(data[0]);
    for (let i = 1; i <= testCases; i++) {
        let str = data[i];
        findSubstring(str)
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
shi`);
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
