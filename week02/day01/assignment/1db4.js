
function runProgram(input) {

    var input1 = Number(input);

    if (input1 % 4 == 0) {
        console.log("yes");
        
    } else {
        console.log("No");
    }
   
    console.log(result);

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