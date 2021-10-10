
function findTrueOrNot(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        let count = 1;
        let temp = arr[0];
        let maxElm = 0;
        let res = 0;
        for (let i = 1; i <= arr.length; i++) {
            if (arr[i] == temp) {
                count++;
            } else {
                maxElm = Math.max(maxElm, count)
                temp = arr[i];
                res = arr[i - 1]
                count = 1;
            }
        }
        if (maxElm > Math.floor(arr.length / 2)) {
            return res;
        } else {
            return -1;
        }
    }
}


function runProgram(input) {
    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let arr = newData[i * 2].split(" ").map(Number);
        arr.sort((a, b) => { return a - b });
        console.log(findTrueOrNot(arr))
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5
7
3 1 10 9 10 4 7
3
2 8 8
6
5 10 4 9 2 2
9
4 10 2 8 4 7 5 4 4
9
7 6 6 7 6 9 8 6 9`);
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
