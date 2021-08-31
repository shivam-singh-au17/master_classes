

function findEvenNum(arr, k) {
    let findEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            findEven++;
        }
    }
    if (findEven >= k) {
        return true;
    } else {
        return false;
    }
}

function printRes(arr, k) {

    let low = 0;
    let high = arr.length - 1;
    let res = "";
    let count = 0;
    function evenSumFun(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (findEvenNum(res.trim().split(" ").map(Number), k) == true) {
                count++;
            }
        }
        for (let i = low; i <= high; i++) {
            evenSumFun(res + arr[i] + " ", arr, i + 1, high)
        }
        return count
    }
    return evenSumFun(res, arr, low, high);

}


function runProgram(input) {

    let Input = input.split('\n');
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {

        let NandK = Input[i * 2 - 1].split(' ').map(Number);
        let K = NandK[1];
        var arr = Input[i * 2].split(' ').map(Number);

        let ans = printRes(arr, K);
        console.log(ans);

    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`5
14 8
66 30 81 2 8 79 60 23 77 26 18 40 58 58
11 9
40 62 27 25 19 89 66 60 17 58 32
4 3
44 60 38 87
3 2
83 93 31
1 1
39`);
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

