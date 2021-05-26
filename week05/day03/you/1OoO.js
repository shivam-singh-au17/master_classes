
var contElmArr = function (data) {

    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] % 2 == 1) {
            count++
        }
    }
    return count;
}

function printResult(count) {
    if (count % 2==1) {
        return 'Yes'
    } else {
        return 'No'
    }
}

function runProgram(input) {

    var inp_split = input.split("\n");
    var test_cases = Number(inp_split[0]);

    for (var i = 1; i <= test_cases; i++) {
        var arr = inp_split[i * 2].split(" ").map(Number);

        var count = contElmArr(arr);
        var result = printResult(count);
        console.log(result);
    }

}
if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
1
2
1 101
2
1 200`);
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