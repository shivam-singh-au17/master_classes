function printTable(items) {
    var table = "";
    for (var i = 1; i <= 10; i++) {
        table += (items * i);
        if (i != 10) {
            table += " ";
        }
    }
    return table
}

function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);

    for (var i = 1; i <= times; i++) {
        var newIn = isSplit[i];
        
        var result = printTable(newIn);
        console.log(result);

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