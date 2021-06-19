
function runProgram(input) {

    var input = input.split("\n");
    var newInput = input[1];
    var result = "";
    for (var i = 0; i < newInput.length; i++) {
        if (newInput.charCodeAt(i) > 96 && newInput.charCodeAt(i) < 123) {
            result += String.fromCharCode(newInput.charCodeAt(i) - 32);
        } else {
            result += String.fromCharCode(newInput.charCodeAt(i) + 32);
        }
    }
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
aBbcd`);
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







































// var lower = "abcdefghijklmnopqrstuvwxyz";
// var upper = "ABCDEFGHIJKLMNIPQRSTUVWXYZ";

// function toLower(input) {
//     for (var i = 0; i < upper.length; i++) {
//         if (upper[i] === input) {
//             return lower[i];
//         }
//     }
//     return input
// }


// function toUpper(input) {
//     for (var i = 0; i < lower.length; i++) {
//         if (lower[i] == input) {
//             return upper[i];
//         }
//     }
//     return input
// }

// var word = "ShIVaM";
// var output = "";
// for (var i = 0; i < word.length; i++) {

//         var upper_c = toLower(word[i])
//         output = output + upper_c;

//         var lower_c = toLower(word[i])
//         output = output + lower_c;

// }
// console.log(output);
// console.log(' ')





