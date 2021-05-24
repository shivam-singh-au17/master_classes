function pushZero(arr) {
    var res1 = "";
    var res2 = "";
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            res1 += arr[i] + " "
        } else {
            res2 += arr[i] + " ";
        }
    }
    res += res1 + res2;
    return res.trim()
}


function runProgram(input) {

    var Input = input.split("\n")
    var InputTimes = Number(Input[0]);


    for (var i = 1; i <= InputTimes; i++) {

        var inputArr = Input[i * 2].split(" ").map(Number);
        var ans1 = pushZero(inputArr);
        console.log(ans1);

    }
}
if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
0 1 2 3 0
5
0 0 1 2 3`);
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
