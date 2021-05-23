
function printType(items) {
    var count = 0
    for (var i = 0; i < items.length; i++) {
        if (items[i] == 0 || items[i] == 1 || items[i] == 2 || items[i] == 3 || items[i] == 4 || items[i] == 5 || items[i] == 6 || items[i] == 7 || items[i] == 8 || items[i] == 9) {
            count++;
        }
    }
    return count;
}

function printResult(count, n) {
    if (count == n) {
        return 'numbers'
    } else if (count < n && count != 0) {
        return "alphanumeric"
    } else {
        return "chars"
    }
}


function runProgram(input) {

    var Input = input.split("\n");
    var InputTimes = Number(Input[0]);

    for (var i = 1; i <= InputTimes; i++) {

        newInput = Input[i * 2].split("");
        n = Number(Input[i * 2 - 1]);
   
        var ans1 = printType(newInput);
        var ans2 = printResult(ans1, n);
        console.log(ans2);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
5
ab2cd
5
acfgh
3
123`);
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

