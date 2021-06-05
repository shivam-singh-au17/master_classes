


// TODO:



function functionName(arr) {



}

function runProgram(input) {

    var Input = input.split("\n")

    var newInput2 = Input[1].split(" ").map(Number);
    var result = functionName(newInput2);
    console.log(result);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 3 5 5 1`);
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
