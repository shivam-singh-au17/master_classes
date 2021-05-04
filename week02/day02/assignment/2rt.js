
function runProgram(input) {
    var input1 = input.split(" ");

    var a = Number(input1[0] * input1[0]);
    var b = Number(input1[1] * input1[1]);
    var c = Number(input1[2] * input1[2]);

    // console.log(a);
    // console.log(b);
    // console.log(c);

    if ((a + b) == c) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 4 5`);
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