function nextIndex(items) {

    for (var i = 0; i < items.length; i++) {
        if (items[i] == 2 && (items.length - 1) != 2) {
            var index = items[i + 1];
        }
    }
    return index
}

function printResult(index) {
    if (index != undefined) {
        return index;
    } else {
        return -1;
    }
}


function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);

    var number = isSplit[1].split(" ").map(Number);
    var p = nextIndex(number);
    var prIndex = printResult(p);
    console.log(prIndex);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 4 3 2 1`);
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