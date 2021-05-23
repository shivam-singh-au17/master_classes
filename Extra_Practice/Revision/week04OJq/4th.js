function worldCup(item1, item2) {
    var res = false;
    for (var i = 0; i < item1.length; i++) {
        for (var j = 0; j < item2.length; j++) {
            if (i == j) {
                if (item1[i] < item2[j]) {
                    res = true;
                }
            }
        }
    }
    return res;
}

function printResult(items) {
    if (items == true) {
        return 'England'
    } else {
        return 'New Zealand'
    }
}


function runProgram(input) {

    var Input = input.split("\n")
    var newInput1 = Input[0].split(" ").map(Number);
    var newInput2 = Input[1].split(" ").map(Number);

    var ans = worldCup(newInput1, newInput2);
    var ans2 = printResult(ans);
    console.log(ans2);
}

if (process.env.USERNAME === "shiva") {
    runProgram(`241 15 21
241 15 20`);
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
