
function sumOfOdd(arr) {
    var oddSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            oddSum += arr[i]
        }
    }
    return oddSum;

}

function ptint(oddSum) {
    if (oddSum % 2 == 0) {
        return "It is Even"
    } else {
        return "It is Odd"
    }
}


function runProgram(input) {

    var input = input.split("\n");
    var testCases = Number(input[0])

    for (var i = 1; i <= testCases; i++) {

        var arr = input[i * 2].split(" ").map(Number);
        var totalSum = sumOfOdd(arr)
        var ans = ptint(totalSum)
        console.log(ans);
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