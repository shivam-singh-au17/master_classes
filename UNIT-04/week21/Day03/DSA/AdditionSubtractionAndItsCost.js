
// FIXME:

function AdditionSubtractionCost(arr) {

    let n = arr.length
    let cost = 0;
    let mid = arr[parseInt(n / 2)];

    for (let i = 0; i < n; ++i){
        cost += Math.abs(arr[i] - mid);
    }

    if (n % 2 == 0) {
        
        let tempCost = 0;
        mid = arr[parseInt(n / 2) - 1];
        
        for (i = 0; i < n; ++i){
            tempCost += Math.abs(arr[i] - mid);
        }
        cost = Math.min(cost, tempCost);
        
    }
    return cost;
}



function runProgram(input) {

    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let nANDk = newData[i * 2 - 1].split(" ").map(Number);
        let k = nANDk[1];
        console.log('k:', k)
        let arr = newData[i * 2].split(" ").map(Number);
        arr.sort((a, b) => { return a - b });
        let ans = AdditionSubtractionCost(arr)
        console.log('ans:', ans)

    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
5 3
9 4 9 7 4`);
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
