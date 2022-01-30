


function ThreeMaxThreeMin(arr) {
    let count = 1;
    let temp = arr[0];
    let res = [];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] == temp) {
            count++;
        } else {
            res.push(arr[i - 1]);
            temp = arr[i];
            count = 1;
        }
    }
    console.log(res);
    if (arr.length < 6) {
        console.log("Not Possible");
        console.log("Not Possible");
    } else {
        console.log(res[0], res[1], res[2]);
        console.log(res[res.length - 3], res[res.length - 2], res[res.length - 1]);
    }
}


function runProgram(input) {
    let newInput = input.split("\n");
    let arr = newInput[1].split(" ").map(Number);
    arr.sort((a, b) => { return a - b });
    console.log(arr);
    ThreeMaxThreeMin(arr)
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`6
51 0 0 11 -11 23`);
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
