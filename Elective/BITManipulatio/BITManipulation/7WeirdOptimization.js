
function CountTrailingZeroes(number) {

    binArr = [];
    while (number > 0) {
        rem = number % 2;
        binArr.push(rem)
        number = Math.floor(number / 2)
    }
    var temp = 0;
    var count = 0;
    for (var i = 0; i < binArr.length; i++) {
        if (temp == binArr[i]) {
            count++;
        } else {
            break;
        }
    }
    return count;
}


function runProgram(input) {

    var input = input.split("\n");

    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {

        var num = Number(input[i]);
        var res = CountTrailingZeroes(num);
        console.log(res);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
1
5
1024`);
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
