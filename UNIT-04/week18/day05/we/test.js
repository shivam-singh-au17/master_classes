
function findNumCount(arr, key, sign) {
    let count = 0;
    if (sign == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= key) {
                count++;
            }
        }
        return count;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > key) {
                count++;
            }
        }
        return count;
    }

}



function runProgram(input) {

    let newData = input.split("\n");

    let arr = newData[1].split(" ").map(Number);

    let testCases = Number(newData[2]);

    for (let i = 3; i <= testCases + 2; i++) {

        let NandK = newData[i].split(" ").map(Number);
        let N = NandK[0];
        let K = NandK[1];
        let ans = findNumCount(arr, K, N)
        console.log(ans);
       

    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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