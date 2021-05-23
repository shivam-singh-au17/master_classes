
var BubbleSort = function (item1, item2) {
    return item1 - item2;
}

function runProgram(input) {

    var newInput = input.split("\n");
    var input1 = newInput[1].split(" ").map(Number);

    var ans = input1.sort(BubbleSort);
    var strArr = ""
    for (var i = 0; i < ans.length; i++){
        strArr += ans[i] + " ";
    }
    console.log(strArr);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
3 5 0 9 8`);
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