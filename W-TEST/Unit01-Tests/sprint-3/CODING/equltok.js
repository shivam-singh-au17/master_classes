
function lessAndK(arr, k) {
    var result = 0;
    for (var i = 0; i < arr.length;i++){
        if (arr[i] <= k) {
            result += arr[i]
        }
    }
    return result;
}

function runProgram(input) {

    var Input = input.split("\n");
    var newInp = Input[0].split(" ").map(Number);
    var arr = Input[1].split(" ").map(Number);
    var k = newInp[1]

    var ans = lessAndK(arr, k);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 2
1 2 3 4`);
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
