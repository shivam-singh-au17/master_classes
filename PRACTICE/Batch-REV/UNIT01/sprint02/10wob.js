function runProgram(input) {

    var input = input.split("\n");

    var firstLine = input[0].trim().split(" ").map(Number)
    var secondLine = input[1].trim().split(" ").map(Number)

    var weight = firstLine[1]

    var sum = 0;
    for (var i = 0; i < secondLine.length; i++) {
        sum += secondLine[i]
    }

    allWaight = sum * weight
    console.log(allWaight);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 6
1 2 3 4 5`);
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