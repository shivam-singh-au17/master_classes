
function santoshProfit(num) {

    if (num % 4 != 0 && num % 8 != 0) {
        return 0;
    }
    if (num == 0) {
        return 0;
    }
    if (num == 4) {
        return 1;
    }
    if (num == 8) {
        return 2;
    }
    else {
        return santoshProfit(num - 4) + santoshProfit(num - 8);
    }
}


function runProgram(input) {

    let Input = input.split("\n");
    let testcases = Number(Input[0]);

    for (let i = 1; i <= testcases; i++) {

        let num = Input[i];

        let ans = santoshProfit(num);
        console.log(ans)
    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`7
28
9
40
56
5
48
150`);
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

