


function SingnalCapacity(arr) {

    arr.reverse();
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < 0) {
                count++;
                res.push(arr[j]);
                break;
            }
        }
    }

    return res.reverse();
}


function printRes(res) {
    let store = "";
    for (var i = 0; i < res.length; i++) {
        store += res[i] + " ";
    }
    return store;
}


function runProgram(input) {

    let newInput = input.trim().split("\n");
    let testCases = Number(newInput[0]);

    for (i = 1; i <= testCases; i++) {

        let arr = newInput[2 * i].split(" ").map(Number);
        let res = SingnalCapacity(arr);
        let ans = printRes(res)
        console.log(ans);

    }
}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
-2 -1 5 4 -3
5
1 2 -1 3 4`);
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



// 0 - 2 - 1 - 1 - 1
// 0 0 0 - 1 - 1