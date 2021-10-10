function findSum(arr, k) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum == k) {
        return true;
    } else {
        return false;
    }
}

function printRes(arr, k) {

    let low = 0;
    let high = arr.length - 1;
    let res = "";
    let temp = "no";
    function evenSumFun(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (findSum(res.trim().split(" ").map(Number), k) == true) {
                temp = "yes"
            }
        }
        for (let i = low; i <= high; i++) {
            evenSumFun(res + arr[i] + " ", arr, i + 1, high)
        }
        return temp
    }
    return evenSumFun(res, arr, low, high);

}



function runProgram(input) {

    let Input = input.split('\n');
    var arr = Input[1].split(" ").map(Number);
    let k = Number(Input[2]);
    let ans = printRes(arr, k);
    console.log(ans);


}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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