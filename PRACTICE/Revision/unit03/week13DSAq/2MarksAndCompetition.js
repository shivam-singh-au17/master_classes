

function marksCompetition(arr) {
    let i, j;
    var res = "";
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                break;
            }
        }
        if (j == arr.length) {
            res += arr[i] + " "
        }
    }
    return res;

}


function runProgram(input) {

    var newInp = input.split("\n");
    var arr = newInp[1].split(" ").map(Number);
    var ans = marksCompetition(arr);
    console.log(ans);

}


if (process.env.USERNAME === "shiva") {
    runProgram(`6
16 17 4 3 5 2`);
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

