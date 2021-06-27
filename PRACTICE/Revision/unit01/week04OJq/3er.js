function ticBooking(item1, item2) {
    var res = 0;
    for (var i = 0; i < item1.length; i++) {
        for (var j = 0; j < item2.length; j++) {
            if (i == j) {
                res += item1[i] * item2[j];
            }
        }
    }
    return res;
}

function printResult(items) {
    if (items > 150000) {
        return 'Not Possible'
    } else {
        return 'Possible'
    }
}


function runProgram(input) {

    var Input = input.split("\n")
    var newInput1 = Input[0].split(" ").map(Number);
    var newInput2 = Input[1].split(" ").map(Number);

    var ans = ticBooking(newInput1, newInput2);
    var ans2 = printResult(ans);
    console.log(ans2);
}

if (process.env.USERNAME === "shiva") {
    runProgram(`10000 20000 15000 5000
2 3 1 1`);
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
