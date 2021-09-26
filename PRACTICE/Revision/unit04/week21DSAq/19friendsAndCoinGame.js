

let CoinsGame = function (arr) {

    let n = arr.length;
    let res = 0;

    for (let i = n / 3; i < n; i += 2) {
        res += arr[i];
    }

    return res;

};


function runProgram(input) {

    let newData = input.split("\n");
    let arr = newData[1].trim().split(" ").map(Number);
    arr.sort((a, b) => { return a - b });
    let ans = CoinsGame(arr);
    console.log(ans);

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
2 4 5`);
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

