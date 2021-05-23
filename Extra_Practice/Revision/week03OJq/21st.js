
function printTable(items) {
    var res = "";
    for (var i = 1; i <= 10; i++) {
        res += items * i + " ";
    } return res;
}

function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[0]);

    for (var i = 1; i <= InputTimes; i++) {

        newInput = Number(Input[i]);
    
        var ans1 = printTable(newInput);
        console.log(ans1);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
2
3`);
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

