
// function isItPowerOf2(num) {
//     if (num == 0) {
//         return 0;
//     } else {
//         while (num % 2 == 0) {
//             num = num / 2;
//         }
//         if (num == 1) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }

// }


// function printResult(res) {
//     if (res == 1) {
//         return "YES"
//     } else {
//         return "NO"
//     }
// }

// function runProgram(input) {

//     var input = input.split("\n");

//     var len = Number(input[0]);

//     for (var i = 1; i <= len; i++) {
//         var num = Number(input[i]);
//         var res = isItPowerOf2(num);
//         var ans = printResult(res);
//         console.log(ans);
//     }

// }

// if (process.env.USERNAME === "shiva") {
//     runProgram(`3
// 1
// 2
// 100`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     var read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\num$/, "");
//         read = read.replace(/\num$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\num$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }











// 2ND MATHOD BY BIT MANUPULATION



function isItPowerOf2(num) {

    if (num == 0) {
        return "NO";
    } else {
        if ((num & (num - 1)) == 0) {
            return "YES";
        } else {
            return "NO";
        }
    }


}

function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {
        var num = Number(input[i]);
        var res = isItPowerOf2(num);
        console.log(res);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
2
100`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
