
function LongestConsecutiveSetbits(num) {

    var count = 0;
    while (num != 0) {
        num = (num & (num << 1));
        count++;
    }
    return count;

}


function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {
        var num = Number(input[i]);
        var res = LongestConsecutiveSetbits(num);
        console.log(res);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
1
0
4294967295
13`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\num$/, "");
        read = read.replace(/\num$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\num$/, "");
        runProgram(read);
        process.exit(0);
    });
}
