
function palindrome(items) {
    result = "";
    for (var i = items.length - 1; i >= 0; i--) {
        result += items[i]
    }
    return result
}

function printResult(result, int) {
    if (result == int) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

function runProgram(input) {

    var newInput = input;
    var ans = palindrome(newInput);
    printResult(ans, newInput)
}
if (process.env.USERNAME === "shiva") {
    runProgram(`2324`);
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