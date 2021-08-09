
function SumWithRecursion(arr) {
    if (arr.length == 1) {
        return 0;
    } else {
        return Math.abs(arr[1] - arr[0]) + SumWithRecursion(arr.slice(1));
    }
}


function runProgram(input) {

    let Input = input.split("\n");
    let testcases = Number(Input[0]);

    for (let i = 1; i <= testcases; i++){
        let arr = Input[i * 2].trim().split(" ").map(Number);
        let ans = SumWithRecursion(arr);
        console.log(ans)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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