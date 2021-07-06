

function AlternateSum(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;

}

function runProgram(input) {

    var Input = input.split("\n");

    var arr = Input[1].split(" ").map(Number);
    var ans = AlternateSum(arr);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`20
4 38 1 3 5 1 3 5 6 0 4 6 67 13 5 16 17 18 19 20`);
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

