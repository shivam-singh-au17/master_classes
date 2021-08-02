

function SingnalCapacity(arr) {

    arr.reverse();

    let p1 = 0;
    let p2 = p1 + 1;
    let count = 1;
    let res = [];
    
    while (p1 <= arr.length && p2 <= arr.length) {
        if (arr[p2] < arr[p1]) {
            count++;
            p2++;
        } else {
            res.push(count);
            p1++;
            p2 = p1 + 1;
            count = 1;
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
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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



