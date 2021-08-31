


function lNextGreaterElement(arr) {

    let Stk_1 = [];
    let Stk_2 = [];
    var res = "";

    for (let i = 0; i < arr.length; i++) {

        while (Stk_1[Stk_1.length - 1] >= arr[i]) {
            Stk_1.pop();
        }

        // if (arr[i] % 2 == 0) {
        //     Stk_2.push(arr[i])
        // }
        if (arr[i] % 2 == 0) {
            Stk_2.push(Stk_1[Stk_1.length - 1])
        } else {
            Stk_1.push(arr[i]);
        }

    }

    console.log(Stk_2);

    // for (j = Stk_2.length - 1; j >= 0; j--) {
    //     res += Stk_2[j] + " "
    // }
    return res;

}



function runProgram(input) {

    let newInput = input.trim().split("\n");
    let testCases = Number(newInput[0]);

    for (i = 1; i <= testCases; i++) {

        let arr = newInput[2 * i].split(" ").map(Number);
        let ans = lNextGreaterElement(arr);
        console.log(ans);

    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
5
2 3 5 8 3`);
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






















// function lNextGreaterElement(arr) {
//     var next, i, j;
//     let store = ""
//     for (i = 0; i < arr.length; i++) {
//         next = -1;
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 next = arr[j];
//                 break;
//             }
//         }
//         store += next + " ";
//     }
//     console.log(store);
// }


// function runProgram(input) {

//     var Input = input.split("\n");
//     var testCases = Number(Input[0]);

//     for (var i = 1; i <= testCases; i++) {

//         var arr = Input[i * 2].trim().split(" ").map(Number);

//         lNextGreaterElement(arr)
//     }

// }

// if (process.env.USERNAME === "shiva") {
//     runProgram(`1
// 4
// 1 3 2 4`);
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


