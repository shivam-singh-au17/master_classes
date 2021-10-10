
// function findDataUsingStack(str) {
//     let stk = [];
//     let count1 = 0;
//     let count2 = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == "(") {
//             stk.push(str[i]);
//             count1++
//         } else {
//             stk.pop()
//             count2++
//         }
//     }
//     if (stk.length == 0 && count2 == count1) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// }


// function runProgram(input) {

//     let data = input.split("\n");
//     let testCases = Number(data[0]);
//     for (let i = 1; i <= testCases; i++){
//         let str = data[i];
//         findDataUsingStack(str)
//     }
    
// }

// if (process.env.USERNAME === "Jay Mahakaal") {
//     runProgram(`5
// (()))
// (((())))
// ()(()(()))
// ()()((
// ))(((())`);
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







function findDataUsingCount(str) {
    let count = 0;
    let temp = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            temp = 0;
        }
    }
    if (count == 0 && temp == 1) {
        console.log("yes");
    } else {
        console.log("no");
    }
}


function runProgram(input) {

    let data = input.split("\n");
    let testCases = Number(data[0]);
    for (let i = 1; i <= testCases; i++) {
        let str = data[i];
        findDataUsingCount(str)
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`8
(()))
(((())))
()(()(()))
()()((
))(((())
((
))
(())(`);
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