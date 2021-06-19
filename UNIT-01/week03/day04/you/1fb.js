function bubbleSort(items, k) {
    var arr = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i] > k) {
            arr.push(items[i])
        }
    }
    return arr;
}

function firstNumber(items) {
    if (items.length >= 1) {
        var temp = items[0]
        for (var i = 1; i < items.length; i++) {
            if (items[i] < temp) {
                temp = items[i]
            }
        }
        var result = temp
    } else {
        result = "-1"
    }
    return result
}


function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[2]);

    for (var i = 1; i <= times; i++) {

        var newIn = isSplit[1].split(" ").map(Number);
        var newInp = Number(isSplit[i + 2]);

        var ans1 = bubbleSort(newIn, newInp);
        var ans2 = firstNumber(ans1);

        console.log(ans2);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15
`);
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