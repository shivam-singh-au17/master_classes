
function findMaxLength(arr, dpArr) {

    for (let j = 1; j < arr.length; j++) {
        for (let i = 0; i < j; i++) {
            if (arr[i] < arr[j]) {
                dpArr[j] = Math.max(dpArr[j], dpArr[i] + 1);
            }
        }
    }
    return Math.max(...dpArr);
}

function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].split(" ").map(Number);
    let dpArr = Array(arr.length).fill(0).map(() => 1);
    console.log(findMaxLength(arr, dpArr))

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`9
10 22 9 33 21 50 41 60 80`);
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
