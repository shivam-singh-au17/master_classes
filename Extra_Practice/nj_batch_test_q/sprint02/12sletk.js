function runProgram(input) {

    var input = input.split("\n");

    var firstLine = input[0].trim().split(" ").map(Number)
    var k = firstLine[1]
    var arry = input[1].trim().split(" ").map(Number)

    var sum = 0;
    for (var i = 0; i < arry.length; i++) {
        if (arry[i] <= k) {
            console.log(arry[i]);
            sum += arry[i]
        }
    }

    console.log(sum);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 2
1 2 3 4`);
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