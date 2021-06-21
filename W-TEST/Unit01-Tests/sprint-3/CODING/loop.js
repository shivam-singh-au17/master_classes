

function findLoop(items) {

    var res = 1;
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items.length; j++) {
            if (i < j && items[i] == items[j]) {
                res++;
            }
        }
    }
    return res;
}

function printResult(res) {
    if (res > 1) {
        return 'Loop'
    } else {
        return "No Loop"
    }
}

function runProgram(input) {
    var Input = input.split(/[\r\n]+/);
    var InputTimes = Number(Input[0]);

    for (var i = 1; i <= InputTimes; i++) {

        var newInput = Input[i * 2].split(" ").map(Number);

        var ans1 = findLoop(newInput);
        var ans2 = printResult(ans1);
        console.log(ans2);

    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 2 3 4 0
6
1 2 3 4 6 6`);
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









