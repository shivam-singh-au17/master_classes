
function findEven(arr) {

    if (arr[0] % 2 == 0 && arr[arr.length - 1] % 2 == 0) {
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

    function EvenSubsequences(res, arr, low, high) {
        if (low <= high + 1 && res != "") {
            if (findEven(res.split(" ").map(Number)) == true) {
                count++;
            }
        }

        for (let i = low; i <= high; i++) {
            EvenSubsequences(res + arr[i] + " ", arr, i + 1, high);
        }

        return count;
    }

    return EvenSubsequences(res, arr, low, high)
}


function runProgram(input) {
    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {
        let arr = Input[i * 2].trim().split(" ").map(Number);
        let ans = printRes(arr);
        if (ans > 0) {
            console.log("yes")
        } else {
            console.log("no");
        }
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
4 3 2 1 5
2
1 3`);
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
