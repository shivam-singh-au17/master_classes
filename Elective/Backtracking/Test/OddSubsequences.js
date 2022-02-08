

function findOddNum(arr) {

    if (arr[0] % 2 == 1 || arr[arr.length - 1] % 2 == 1) {
        return true;
    } else {
        return false;
    }
}



function findKOddSubSet(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let res = "";
    let temp = "no";
    function printRes(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (findOddNum(res.trim().split(" ").map(Number), k) == true) {
                temp = "yes"
            }
        }
        for (let i = low; i <= high; i++) {
            printRes(res + arr[i] + " ", arr, i + 1, high);
        }
        return temp;
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
4
4 3 2 1
2
2 4`);
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
