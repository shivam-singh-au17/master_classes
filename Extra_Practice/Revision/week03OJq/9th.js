
function upToLo_LoToUp(str) {

    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96) {
            result += String.fromCharCode(str.charCodeAt(i) - 32);
        } else if (str.charCodeAt(i) < 123) {
            result += String.fromCharCode(str.charCodeAt(i) + 32);
        }
    }
    return result;
}


function runProgram(input) {

    var Input = input.split("\n");
    var newInput = Input[1];

    var ans = upToLo_LoToUp(newInput);
    console.log(ans);

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

