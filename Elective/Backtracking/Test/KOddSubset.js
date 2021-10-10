
function findOddNum(arr, k) {
    let findOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            findOdd++;
        }
    }
    if (findOdd == k) {
        return true;
    } else {
        return false;
    }
}


function findKOddSubSet(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let res = "";
    let count = 0;
    function printRes(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (findOddNum(res.trim().split(" ").map(Number), k) == true) {
                count++;
            }
        }
        for (let i = low; i <= high; i++) {
            printRes(res + arr[i] + " ", arr, i + 1, high);
        }
        return count;
    }
    return printRes(res, arr, low, high)
}


function runProgram(input) {

    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let NandK = newData[i * 2 - 1].split(" ").map(Number);
        let K = NandK[1];
        let arr = newData[i * 2].split(" ").map(Number);
        console.log(findKOddSubSet(arr, K));
    }


}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
4 2
4 3 2 1
2 1
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
