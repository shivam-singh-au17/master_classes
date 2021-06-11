
function sumOfEven(arr) {
    var evenSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenSum += arr[i]
        }
    }
    return evenSum;

}


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0])

    for (var i = 1; i <= testCases; i++) {

        var arr = input[i * 2].split(" ").map(Number);
        var totalSum = sumOfEven(arr)
        console.log(totalSum);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
1 2 3
5
2 2 2 2 1`);
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