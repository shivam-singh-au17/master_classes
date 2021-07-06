
// TODO:
function StringReversal(str) {

    var start = 0;
    var end = str.length;

    while (start < end) {

        str[start] = String.fromCharCode(str[start].charCodeAt(0) ^ str[end].charCodeAt(0));
        str[end] = String.fromCharCode(str[end].charCodeAt(0) ^ str[start].charCodeAt(0));
        str[start] = String.fromCharCode(str[start].charCodeAt(0) ^ str[end].charCodeAt(0));

        ++start;
        --end;
    }
    return (str).join("");

}

function runProgram(input) {

    var str = input;
    var ans = StringReversal(str)
    console.log('ans:', ans)

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

