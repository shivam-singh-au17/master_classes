
function powerSet(str, index, res) {

    let n = str.length;
    if (index == n) {
        return;
    }
    if (res != "") {
        console.log(res);
    }

    for (let i = index + 1; i < n; i++) {
        res += str[i];
        powerSet(str, i, res);

        res = res.substring(0, res.length - 1);
    }
}


function runProgram(input) {

    var newData = input.split("\n");

    let str = newData[1];
    let index = -1;
    let res = "";

    powerSet(str, index, res);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4
abcd`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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


