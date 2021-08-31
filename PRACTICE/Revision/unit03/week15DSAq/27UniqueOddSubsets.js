function Checkdistinct(arr, k) {
    let count = 0;
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] == temp + 1) && temp == arr[i] - 1) {
            temp = arr[i];
            count++;
        }
    }
    if (count = k - 1) {
        return true;
    } else {
        return false;
    }
}

function sum(arr, k) {
    if (Checkdistinct(arr, k) == true) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        if (sum % 2 == 1) {
            return true;
        } else {
            return false;
        }
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
            if (sum(res.trim().split(" ").map(Number), k) == true) {
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

    var arr = Input[1].split(' ').map(Number);
    let k = Number(Input[2]);
    let ans = printRes(arr, k);

    if (ans > 0) {
        console.log('True');
    } else {
        console.log('False');
    }

}


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