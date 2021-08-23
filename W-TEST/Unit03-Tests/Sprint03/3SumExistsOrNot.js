
function findSum(arr, sum) {
    let res = 0;
    for (let i = 0; i < arr.length; i++){
        res += arr[i];
    }
    if (res == sum) {
        return true;
    } else {
        return false;
    }
}

function SumExistsOrNot(arr, sum) {

    let low = 0;
    let high = arr.length - 1;
    let res = "";
    let count = 0;

    function findSumSubset(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (findSum(res.split(" ").map(Number), sum) == true) {
                count++;
            }
        }
        for (let i = low; i <= high; i++) {
            findSumSubset(res + arr[i] + " ", arr, i + 1, high)
        }
        return count;
    }

    return findSumSubset(res, arr, low, high);
}


function runProgram(input) {

    let Input = input.split("\n");
    let arr = Input[1].split(" ");
    let sum = Number(Input[2]);
    let ans = SumExistsOrNot(arr, sum);
    if (ans > 0) {
        console.log("yes");
    } else {
        console.log("no");
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
1 100
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
