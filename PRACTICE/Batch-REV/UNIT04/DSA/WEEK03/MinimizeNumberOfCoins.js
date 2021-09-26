


let denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
let n = denominations.length;

function MinimizeNumberCoins(value) {

    let res = [];

    for (let i = n - 1; i >= 0; i--) {
        while (value >= denominations[i]) {
            value -= denominations[i];
            res.push(denominations[i]);
        }
    }

    let count = 0;
    for (let i = 0; i < res.length; i++) {
        count++;
    }
    return count
}


function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);
    for (let i = 1; i <= testCases; i++) {
        let value = Number(Input[i])
        console.log(MinimizeNumberCoins(value));
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
45
93
29`);
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