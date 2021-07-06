
function WeightedSum(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i] * (i + 1);
    }
    return sum;
}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {
        var arr = Input[i * 2].split(" ").map(Number);

        var ans = WeightedSum(arr);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 2 3 4 5
2
100 1`);
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








// 2nd mathod


function runProgram(input) {
    var input = input.split("\n");
    var t = input[0].split(" ").map(Number);
    for (let a = 0; a < t; a++) {
        var n = input[2 * a + 1].split(" ").map(Number);
        var array = input[2 * a + 2].split(" ").map(Number)
        var sum = 0;
        array.forEach(function (e, i) {
            sum += (i + 1) * e

        });
        console.log(sum);
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