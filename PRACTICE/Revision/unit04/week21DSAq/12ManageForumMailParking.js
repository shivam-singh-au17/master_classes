

// FIXME:


function findValue(k, arr1, arr2) {
    let temp = Number.MIN_VALUE;
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < temp) {
            count++;
        } else {
            temp = arr2[i]
        }
    }
    let len = arr1.length;
    let res = len - count;
    if (res >= k) {
        console.log("Not Possible");
    } else {
        console.log("Possible");
    }
}


function runProgram(input) {

    let newData = input.split("\n");
    let k = Number(newData[0])
    let arr1 = newData[1].split(" ").map(Number);
    let arr2 = newData[2].split(" ").map(Number);
    //arr2.sort(function (a, b) { return a - b });
    findValue(k, arr1, arr2)

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`1
1 3 5
2 6 8`);
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