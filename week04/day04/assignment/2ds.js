function decipherString(items) {
    var data = items.split("");
    var n = data.length;
    var result = "";
    
    for (var i = 0; i < n; i = i + 2) {
        var alpha = data[i + 1];
        for (var j = 0; j < alpha; j++) {
            result += data[i];
        }
    }
    return result;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var testCase = Number(newInput[0]);

    for (var i = 1; i <= testCase; i++) {

        var data = newInput[i * 2];
        var final = decipherString(data);
        console.log(final);

    }
}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
6
a2b1c2
6
a2z1a2`);
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