function goodString(items) {

    var n = items.length;
    var result = "";
    var count = 1;
    var temp = items[0];
    for (var i = 1; i < n; i++) {
        if (items[i] == temp) {
            count++
        } else {
            result += temp;
            count = 1;
            temp = items[i];
        }
    }
    result += temp;
    return result;
}

function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);

    for (var i = 1; i <= times; i++) {
        var newIn = isSplit[i];

        var ans = goodString(newIn);
        console.log(ans);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
abb
aaab
ababa`);
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