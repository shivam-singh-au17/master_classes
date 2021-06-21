
// function runProgram(input) {
//     var newInput = input.split("\n");
//     var t = Number(newInput[0]);

//     for (var a = 1; a <= t; a++) {
//         var arr = newInput[2 * a].split(" ").map(Number);
//         var count = 0;
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1)
//                 count++;
//             break;
//         }
//     }
//     if (count == 1) {
//         console.log("Misbehave!");
//     } else {
//         console.log("Behave!")
//     }
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











function arrBehavior(arr) {

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1)
            count++;
        break;
    }

    if (count == 1) {
        return "Misbehave!"
    } else {
        return "Behave!"
    }
}

function runProgram(input) {

    var newInput = input.split("\n");
    var testCase = +newInput[0];

    for (var a = 1; a <= testCase; a++) {

        var data = newInput[a * 2].split(" ").map(Number);

        var ans = arrBehavior(data);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
6
1 3 3 4 5 6
5
1 2 3 5 7 4 5`);
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