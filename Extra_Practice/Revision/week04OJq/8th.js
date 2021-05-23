
function findDataType(items, str) {
    // TODO:
}


function runProgram(input) {

    var newInput = input.split("\n");
    // var input1 = newInput[0]
    var input1 = Number(newInput[0]);
    var input2 = newInput[1]

    var ans = findDataType(input2, input1);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
12345`);
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