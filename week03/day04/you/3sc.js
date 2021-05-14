function stringCheck(newInput1, newInput2) {

    var count = 0;
    for (var i = 0; i < newInput1.length; i++) {
        if (newInput1[i] == "0" || newInput1[i] == "1" || newInput1[i] == "2" || newInput1[i] == "3" || newInput1[i] == "4" || newInput1[i] == "5" || newInput1[i] == "6" || newInput1[i] == "7" || newInput1[i] == "8" || newInput1[i] == "9") {
            count++
        }
    }
    if (count == 0) {
        console.log("chars");
    } else if (count == newInput2) {
        console.log("numbers");
    } else {
        console.log("alphanumeric");
    }

}

function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);

    for (var i = 1; i <= times; i++) {
        var newIn = isSplit[i * 2];
        var newInp = isSplit[(i * 2) - 1];
        stringCheck(newIn, newInp);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
5
ab2cd
5
asdfg
3
723`);
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