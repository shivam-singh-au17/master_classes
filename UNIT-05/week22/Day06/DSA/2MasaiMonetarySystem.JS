//  SIMPLE ONE USING RCURSION

/*
function findMax(num) {
    if (num <= 0) {
        return 0;
    }
    if (num == 1 || num == 2 || num == 3 || num == 4) {
        return num;
    }
    let res = Math.max(num, findMax(Math.floor(num / 2)) + findMax(Math.floor(num / 3)) + findMax(Math.floor(num / 4)))
    return res;
}

*/


//  USING DP WITH RECURSION

// FIXME:


function findMax(num, dpArr) {
    if (num <= 0) {
        return 0;
    }
    if (num == 1 || num == 2 || num == 3 || num == 4) {
        return num;
    }
    if (dpArr[num] != "t") {
        return dpArr[num];
    }
    let ans = Math.max(num, findMax((Math.floor(num / 2)), dpArr) + findMax((Math.floor(num / 3)), dpArr) + findMax((Math.floor(num / 4)), dpArr));
    dpArr[num] = ans;
    return ans;
}


function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = newInput.length;
    for (let i = 0; i < testCases; i++) {
        // let dic = {};
        let dpArr = Array(1000).fill(0).map(() => "t");
        let num = Number(newInput[i]);
        console.log(findMax(num, dpArr))
    }
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`12
2`);
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
