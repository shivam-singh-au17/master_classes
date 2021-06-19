function runProgram(input) {
    var input1 = input.split(" ");
    var num1 = Number(input1[0]);
    var num2 = Number(input1[1]);
    var result = "";

    for (var i = num1; i <= num2; i *= 2) {
        result = result + i + " "
    }
    console.log(result);


}
if (process.env.USERNAME === "shiva") {
    runProgram(`47 156`);
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





 
