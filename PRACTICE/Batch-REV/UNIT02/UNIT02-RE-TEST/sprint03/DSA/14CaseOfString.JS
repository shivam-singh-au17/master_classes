

function CaseOfString(str) {

    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96) {
            result += String.fromCharCode(str.charCodeAt(i) - 32);
        } else if (str.charCodeAt(i) < 123) {
            result += String.fromCharCode(str.charCodeAt(i) + 32);
        }
    }
    return result;
}


function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var str = Input[i * 2].trim();
        var ans = CaseOfString(str);
        console.log(ans)

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
abPKi
6
ShIvAm`);
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