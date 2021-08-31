


function MasaiPackersMovers(arr, num) {
    if (num <= 0) {
        return;
    } else {
        let ans;
        for (let i = 0; i < num; i++){
            ans = ans + MasaiPackersMovers(arr, num - arr[i])
        }
        return ans
    }
}


function runProgram(input) {

    let Input = input.split("\n");
    let NandK = Input[0].trim().split(" ").map(Number);
    let K = NandK[1]
    let arr = Input[1].trim().split(" ").map(Number);
    let ans = MasaiPackersMovers(arr, K);
    console.log(ans)

}

if (process.env.USERNAME === "shiva") {
    runProgram(`3 3
1 2 3`);
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
