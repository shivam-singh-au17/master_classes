
function SantoshProfit(num) {

    if (num % 4 != 0 && num % 8 != 0) {
        return 0;
    }
    if (num == 0) {
        return 0;
    }

    if (num === 4) {
        return 1;
    }

    if (num === 8) {
        return 2;
    }

    let res = SantoshProfit(num - 4) + SantoshProfit(num - 8);
    return res;

}


function runProgram(input) {

    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= testCases; i++) {
        let num = Number(newInput[i]);
        console.log(SantoshProfit(num));
    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
120`);
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

