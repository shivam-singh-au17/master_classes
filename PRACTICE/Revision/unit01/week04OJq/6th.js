function EqualTo42(item1) {
    var res = false;
    for (var i = 0; i < item1.length; i++) {
        if (item1[i] == 42) {
            res = true;
        }
    }
    return res;
}

function printResult(res) {
    if (res == true) {
        return 'Yes';
    } else {
        return 'No';
    }
}

function runProgram(input) {

    var Input = input.split("\n")
    var newInput2 = Input[1].split(" ").map(Number);

    var ans1 = EqualTo42(newInput2);
    var ans2 = printResult(ans1);
    console.log(ans2);
}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 7 0 42 8`);
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