
function FactorialRecursion(num) {

   if (num == 1) {
       return 1;
   } else {
       let res = num * FactorialRecursion(num - 1);
       return res;
   }

}

function runProgram(input) {

    var input = Number(input);
    let ans = FactorialRecursion(input);
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`4`);
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

