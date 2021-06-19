
function maxNum(items) {
    var max = items[0];
    for (var i = 0; i < items.length; i++) {
        if (items[i] > max) {
            max = items[i]
        }
    }
    return max
}

function minNum(items) {
    var max = items[0];
    for (var i = 0; i < items.length; i++) {
        if (items[i] < max) {
            max = items[i]
        }
    }
    return max
}


function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[1].split(" ").map(Number);

    var ans1 = maxNum(newInput1);
    var ans2 = minNum(newInput1);
    console.log(ans2);
    console.log(ans1);
}
if (process.env.USERNAME === "shiva") {
    runProgram(`4
-2 0 8 4`);
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
