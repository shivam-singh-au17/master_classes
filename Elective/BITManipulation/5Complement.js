

function Complement(num) {

    let result = 0;
    let i = 0;
    while (num) {
        if ((num & 1) == 0)
            result += 1 << i;

        i += 1;
        num >>= 1;
    }
    return result;
}


function runProgram(input) {

    var input = input.split("\n");

    var testCases = Number(input[0]);

    for (var i = 1; i <= testCases; i++) {

        var num = Number(input[i]);
        var res = Complement(num);
        console.log(res);

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3
5
1
2147483648`);
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




