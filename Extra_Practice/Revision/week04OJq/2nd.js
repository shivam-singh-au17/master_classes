function subString(items) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        for (var j = i; j < items.length; j++) {
            if (items[i] == items[j]) {
                count++
            }
        }
    }
    return count;
}


function runProgram(input) {

    var Input = input
    
    var ans = subString(Input);
    console.log(ans);
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
