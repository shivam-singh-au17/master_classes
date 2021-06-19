function runProgram(input) {

    var input = input.split("\n");
    var newInput = input[1].trim().split(" ").map(Number);

    var Even = 0;
    var Odd = 0;

    for (var i = 0; i < newInput.length; i++) {
        if (i % 2 == 0) {
            Even += (newInput[i] * 2)

        } else {
            Odd += (newInput[i] * 3)
        }
    }

    console.log(Even + Odd);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
1 2 3 4 5 `);
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