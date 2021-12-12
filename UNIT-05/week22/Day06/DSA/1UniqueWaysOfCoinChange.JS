
/*

//  NORMAL WAY USING SIMPLE RECURSION

function CoinChange(arr, len, num) {

    if (num == 0) {
        return 1;
    }

    if (num < 0) {
        return 0;
    }

    if (len <= 0 && num >= 1) {
        return 0;
    }

    return CoinChange(arr, len - 1, num) + CoinChange(arr, len, num - arr[len - 1]);
}


*/



// /*

//  DP WAY USING SIMPLE RECURSION

function CoinChange(arr, len, num, dpArr) {

    if (num == 0) {
        return 1;
    }

    if (num < 0) {
        return 0;
    }
    
    if (len <= 0 && num >= 1) {
        return 0;
    }
    if (dpArr[len][num] != "t") {
        return dpArr[len][num];
    }

    let ans = CoinChange(arr, len - 1, num, dpArr) + CoinChange(arr, len, num - arr[len - 1], dpArr);
    dpArr[len][num] = ans;
    return ans;

}


// */





function runProgram(input) {
    var Input = input.split("\n");
    var numAndLen = Input[0].split(" ").map(Number);
    let num = numAndLen[0];
    let len = numAndLen[1];
    var arr = Input[1].split(" ").map(Number);
    var dpArr = Array.from(Array(250), () => Array(250).fill("t"));
    console.log(CoinChange(arr, len, num, dpArr));
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`166 23
5 37 8 39 33 17 22 32 13 7 10 35 40 2 43 49 46 19 41 1 12 11 28`);
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






/*

//  FOR FIND MINIMUM COIN TO MAKE NUMBER
//  DP WAY USING RECURSION

function CoinChange(arr, num, dpArr = {}) {

    let min = Infinity, count;

    if (num in dpArr) {
        return dpArr[num];
    }
    if (num < 0) {
        return -1;
    }
    if (num == 0) {
        return 0;
    }

    for (let coin of arr) {

        count = CoinChange(arr, num - coin, dpArr);

        if (count != -1) {
            min = Math.min(min, 1 + count);
        }
    }
    return (min === Infinity) ? dpArr[num] = -1 : dpArr[num] = min;
};


*/