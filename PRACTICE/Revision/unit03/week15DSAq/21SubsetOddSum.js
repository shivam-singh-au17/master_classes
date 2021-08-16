
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

function printRes(arr) {

    let low = 0;
    let high = arr.length - 1;
    let res = "";
    let count = 0;
    function evenSumFun(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (sum(res.split("").map(Number)) == true) {
                count++;
            }
        }
        for (let i = low; i <= high; i++) {
            evenSumFun(res + arr[i], arr, i + 1, high)
        }
        return count
    }
    return evenSumFun(res, arr, low, high);

}



function runProgram(input) {

    let Input = input.split('\n');
    let testCases = Number(Input[0]);
    for (let i = 1; i <= testCases; i++) {
        var arr = Input[i * 2].split(' ').map(Number);
        let ans = printRes(arr);
        console.log(ans);

    }
}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
4
4 3 2 1
2
2 3`);
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

