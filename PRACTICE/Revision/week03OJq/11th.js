
function score(num1, num2) {
 
    if (num1 > num2) {
        return 'Not Yet';
    } else if (num1 < num2) {
        return 'Broken';
    } else {
        return 'Wao'
    }

}

function runProgram(input) {

    var newInput = input.split(" ").map(Number);
    var ans = score(newInput[0], newInput[1]);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`264 264`);
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