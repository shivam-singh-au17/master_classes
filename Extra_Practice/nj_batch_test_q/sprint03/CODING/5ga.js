
function gretarAhed(items) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] > items[i + 1])
            count++;
    }
    return count;
}


function runProgram(input) {
    var Input = input.split(/[\r\n]+/);
    var InputTimes = Number(Input[0]);
    for (var i = 1; i <= InputTimes; i++) {

        var newInput = Input[i * 2].split(" ").map(Number);

        var ans = gretarAhed(newInput);
        console.log(ans);

    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 4 2 3 5
5
5 4 3 2 1`);
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
//     var newInput = input.split(/[\r\n]+/);
//     var length = Number(newInput[0]);
//     for (var a = 0; a < length; a++) {
//         var data = newInput[a * 2 + 2].split(" ").map(Number);
//         var count = 0;
//         for (var i = 0; i < data.length; i++) {
//             if (data[i] > data[i + 1])
//                 count++;
//         }
//         console.log(count)
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






