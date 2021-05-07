function runProgram(input) {
    var input1 = input.split("\n");
    var data = input1[1].split(" ").map(Number)
    var sumOfOdd = 0;
    var sumOfEven = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] % 2 == 1) {
            sumOfOdd += data[i]
        }
        if (data[i] % 2 == 0) {
            sumOfEven += data[i]
        }
    }
    if (sumOfEven > sumOfOdd) {
        console.log("Even");
    } else if (sumOfEven == sumOfOdd) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
    // console.log(sumOfOdd);
    // console.log(sumOfEven);


}
if (process.env.USERNAME === "shiva") {
    runProgram(`5
2 2 2 3 3`);
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