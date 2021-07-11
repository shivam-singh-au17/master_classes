
function MaximizeSubstring(str) {

    var res = "";
    for (var i = 0; i < str.length; i++) {
        if (res.localeCompare(str.substring(i)) <= 0) {
            res = str.substring(i);
        }
    }
    return res;
}


function runProgram(input) {

    var Input = input.split("\n");

    var str = Input[1];
    var ans = MaximizeSubstring(str);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6
ababaa`);
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

