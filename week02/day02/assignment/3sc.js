
function runProgram(input) {
    var input1 = input.split(" ");

    var a = Number(input1[0])
    var b = (input1[1])
    var c = Number(input1[2])

    // console.log(a);
    // console.log(b);
    // console.log(c);

    if (b == "*") {
        console.log(a * c);
    } else if (b == "+") {
        console.log(a + c);
    } else if (b == "-") {
        console.log(a - c);
    } else if (b == "/") {
        if (a > c) {
            e = a % c
            d = a - e
            console.log(d / c);
        } else {
            console.log(0);
        }
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5 / 10`);
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