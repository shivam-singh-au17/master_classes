function reverce(items) {

    if (items.length % 2 != 0) {
        var result = "";
        for (var i = (Math.floor(items.length / 2)) - 1; i >= 0; i--) {
            result += items[i]
        }
        for (var i = (Math.floor(items.length / 2)); i <= (Math.floor(items.length / 2)); i++) {
            result += items[i]
        }
        for (var i = items.length - 1; i > Math.floor(items.length / 2); i--) {
            result += items[i]
        }
        return result;
    } else {
        var result = "";
        for (var i = (items.length / 2) - 1; i >= 0; i--) {
            result += items[i]
        }
        for (var i = items.length - 1; i >= items.length / 2; i--) {
            result += items[i]
        }
        return result;
    }
}


function runProgram(input) {

    var isSplit = input;
    allReverce = reverce(isSplit);
    console.log(allReverce);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`jsdfnsgnlewnl`);
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