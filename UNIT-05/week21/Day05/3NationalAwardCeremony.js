
function arrangeGoldSilver(arr) {
    let gold = "";
    let silver = "";
    let bronze = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0) {
            gold += arr[i] + " ";
        } else if (arr[i] == 1) {
            silver += arr[i] + " ";
        } else {
            bronze += arr[i] + " ";
        }
    }
    console.log(gold + silver + bronze);
}


function runProgram(input) {
    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let arr = newData[i * 2].split(" ").map(Number);
        arrangeGoldSilver(arr)
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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
