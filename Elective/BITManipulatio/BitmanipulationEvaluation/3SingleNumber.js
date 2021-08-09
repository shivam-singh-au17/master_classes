
function SingleNumber(arr) {

    var temp = 0;

    for (var i = 0; i < arr.length; i++) {
        temp = temp ^ arr[i]
    }
    return temp;

}

function runProgram(input) {

    var input = input.split("\n");

    var len = Number(input[0]);

    for (var i = 1; i <= len; i++) {
        var arr = input[i * 2].split(" ").map(Number);
        var res = SingleNumber(arr);
        console.log(res);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`1
5
1 2 3 2 1`);
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
