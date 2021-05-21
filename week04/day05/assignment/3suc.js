
function subString(items) {
    var result = 0;
    var n = items.length;

    for (i = 0; i < n; i++)
        for (j = i; j < n; j++)
            if (items.charAt(i) == items.charAt(j))
                result++;
    return result;
}

function runProgram(input) {

    var newInput = input;

    var result1 = subString(newInput);
    console.log(result1);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`abcab`);
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


