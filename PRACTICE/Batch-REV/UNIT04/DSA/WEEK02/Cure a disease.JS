function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    var res = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr2[i]) {
            continue;

        }
        else {
            res = false;
            break;
        }
    }
    if (res) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }



}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});