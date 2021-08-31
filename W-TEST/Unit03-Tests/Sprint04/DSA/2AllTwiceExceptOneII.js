
function AllTwiceExceptOne(arr) {

    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp = temp ^ arr[i];
    }
    return temp;

}

function runProgram(input) {

    let Input = input.split("\n");
    let testCases = Number(Input[0]);

    for (let i = 1; i <= testCases; i++) {
        let arr = Input[i * 2].trim().split(" ").map(Number);
        let ans = AllTwiceExceptOne(arr);
        console.log(ans);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 2 1 3 4 4 5 2 3
5
6 6 7 8 8`);
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
