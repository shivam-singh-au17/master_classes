
function equalTo42(items) {
    var num = 42;
    result = false;
    for (var i = 0; i < items.length; i++) {
        if (items[i] == num) {
            result = true;
        }
    }
    return result
}

function printResult(result) {
    if (result == true) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}


function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[1].split(" ").map(Number);

    var ans = equalTo42(newInput1);
    printResult(ans)
}
if (process.env.USERNAME === "shiva") {
    runProgram(`4
-2 0 8 4 42`);
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