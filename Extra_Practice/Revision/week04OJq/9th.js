
function Reversal(str) {

    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i] + " ";
    }
    return result;
}


function runProgram(input) {

    var Input = input.split(" ");

    var ans = Reversal(Input);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`A Transformation in education`);
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

