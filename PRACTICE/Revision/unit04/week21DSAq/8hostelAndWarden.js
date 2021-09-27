
function HostelWarden(arr1, arr2) {
    arr1.sort((a, b) => { return a - b });
    arr2.sort((a, b) => { return a - b });
    let maxm = 0;
    for (let i = 0; i < arr1.length; i++) {
        let temp = Math.abs(arr1[i] - arr2[i]);
        maxm = Math.max(temp, maxm)
    }
    return maxm;
}


function runProgram(input) {

    let Input = input.split("\n");
    let arr1 = Input[1].split(" ").map(Number);
    let arr2 = Input[2].split(" ").map(Number);
    let ans = HostelWarden(arr1, arr2);
    console.log(ans);

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
4 -4 2
4 0 5`);
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