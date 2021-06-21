
function itTriangle(items) {

    var result = false
    for (var i = 0; i < items.length; i++) {
        if (items[0] + items[1] > items[2] && items[1] + items[2] > items[0] && items[0] + items[2] > items[1]) {
            result = true;
        }
    }
    return result
}


function printResult(result) {
    if (result == true) {
        return 'Yes';
    } else {
        return 'No'
    }
}

function runProgram(input) {

    var Input = input.split("\n");
    var inputTimes = Number(Input[0]);

    for (var i = 1; i <= inputTimes; i++){

        var newInput = Input[i].split(" ").map(Number);

        var ans1 = itTriangle(newInput);
        var ans2 = printResult(ans1);
        console.log(ans2);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2
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
