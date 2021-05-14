function countNo(items, items2) {

    var n = items.length;
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (items[i] > items2) {
            count++
        }
    }
    return count

}

function secondMax(items, items2) {

    var n = items.length;
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (items[i] > items2) {
            count++
            if (count == 2) {
                var result = i - 1
            }
        }
    }
    return result

}

function printResult(items, result, count) {
    if (count < 2) {
        return items.length;
    } else {
        return result;
    }
}


function runProgram(input) {

    var isSplit = input.split(/[\r\n]+/);
    var newInput1 = isSplit[0].split(" ").map(Number);
    var newInput2 = isSplit[1].split(" ").map(Number);
    var newInp = newInput1[1]

    var secondMaxNumber = secondMax(newInput2, newInp);
    var maxCount = countNo(newInput2, newInp)
    var ans = printResult(newInput2, secondMaxNumber, maxCount);
    console.log(ans);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`7 6
4 3 7 7 6 5 2
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