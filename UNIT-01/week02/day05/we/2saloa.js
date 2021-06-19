function runProgram(input) {
    var input1 = input.split("\n");
    var data = input1[1].split(" ").map(Number)

    var small = data[0];
    var big = data[0];
    for (var i = 0; i < data.length; i++) {
        if (data[i] < small) {
            small = data[i]
        }
        if (data[i] > big) {
            big = data[i]

        }
    }
    console.log(small);
    console.log(big);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
-2 0 18 4`);
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