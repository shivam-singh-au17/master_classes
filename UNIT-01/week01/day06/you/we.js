
// function runProgram(input) {

//     // var input = input.trim().split(/[\r\n]+/);
//     // var input = input.trim().split(/[\r\n]+/).map(Number);

//     // var input = input.trim().split(" ");
//     // var input = input.trim().split(" ").map(Number);
//     var input1 = Number(input);
//     var over = 50;
//     console.log(over * input1);


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


// function runProgram(input) {

//     // var input = input.trim().split(/[\r\n]+/);
//     // var input = input.trim().split(/[\r\n]+/).map(Number);

//     // var input = input.trim().split(" ");
//     // var input = input.trim().split(" ").map(Number);
//     var input1 = Number(input);
//     console.log([input1 * (input1 + 1)] / 2);


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



// function runProgram(input) {

//     var input1 = input.split(" ");

//     var a = input1[0]
//     var b = input1[1]
//     var c = input1[2]
//     var d = input1[3]
//     var e = input1[4]
//     var f = input1[5]

//     console.log(a * b * c * d * e * f);


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




function runProgram(input) {

    var input1 = input.split(" ");
    

    var a = Number(input1[0] * 1)
    var b = Number(input1[1] * 2)
    var c = Number(input1[2] * 3)
    var d = Number(input1[3] * 3)
    var e = Number(input1[4] * 2)
    var f = Number(input1[5] * 2)

    console.log(a + b  + c + d  + e  + f);
    


}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});

