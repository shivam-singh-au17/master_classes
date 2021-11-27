function GenerateAllSubsequence(str, index, curr) {

    let n = str.length;
    if (index == n) {
        return;
    }
    if (curr != "") {
        console.log(curr);
    }

    for (let i = index + 1; i < n; i++) {
        curr += str[i];
        GenerateAllSubsequence(str, i, curr);

        curr = curr.substring(0, curr.length - 1);
    }
}


function runProgram(input) {

    var newData = input.split("\n");

    let str = newData[1];
    let index = -1;
    let curr = "";

    GenerateAllSubsequence(str, index, curr);

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


