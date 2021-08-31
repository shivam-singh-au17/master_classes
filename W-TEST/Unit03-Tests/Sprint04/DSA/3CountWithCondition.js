

function findSum(arr, K) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    if (sum == K) {
        return true;
    } else {
        return false;
    }
}


function CountWithCondition(arr, k) {

    let lb = 0;
    let ub = arr.length - 1;
    let res = "";
    let count = 0;

    function countAllNum(res, arr, lb, ub) {
        
        if (lb <= ub + 1 && res != "") {
            if (findSum(res.split(" ").map(Number), k) == true) {
                count++;
            }
        }

        for (let i = lb; i <= ub; i++){
            countAllNum(res + arr[i] + " ", arr, i + 1, ub);
        }

        return count;
    }

    return countAllNum(res, arr, lb, ub);

}


function runProgram(input) {
    let Input = input.split("\n");
    let NandK = Input[0].trim().split(" ").map(Number);
    let K = NandK[1]
    let arr = Input[1].trim().split(" ").map(Number);
    let ans = CountWithCondition(arr, K);
    console.log(ans)
}

if (process.env.USERNAME === "shiva") {
    runProgram(`7 15
1 2 3 5 6 8 10`);
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
