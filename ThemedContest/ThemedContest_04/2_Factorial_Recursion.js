
function FactorialRecursion(num) {

    if (num <= 0) {
        return 1;
    }
    if (num > 0) {
        return num * FactorialRecursion(num - 1);
    }
    
}


function runProgram(input) {

    let num = Number(input);
    console.log(FactorialRecursion(num));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`6`);
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

