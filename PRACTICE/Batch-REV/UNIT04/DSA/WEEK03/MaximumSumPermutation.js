
function MaximumSum(arr, len) {
    arr.sort((a, b) => { return a - b });
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += (arr[i] * i);
    }
    return sum;
}


function runProgram(input) {

    let Input = input.split("\n");

    let len = Number(Input[0]);
    let arr = Input[1].split(" ").map(Number);

    console.log(MaximumSum(arr, len));

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`4
2 5 1 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
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