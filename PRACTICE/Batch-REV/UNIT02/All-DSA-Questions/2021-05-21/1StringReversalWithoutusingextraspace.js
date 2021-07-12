
function StringReversal(str) {

    var start = 0;
    var end = str.length - 1;
    var temp = null;

    while (start < end) {

        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
    return str;
}

function printResult(str) {
    var res = "";
    for (var i = 0; i < str.length; i++) {
        res += str[i];
    }
    return res;
}

function runProgram(input) {

    var str = input.split("");

    var ans = StringReversal(str)
    var res = printResult(ans)

    console.log(res)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`masaischool`);
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

