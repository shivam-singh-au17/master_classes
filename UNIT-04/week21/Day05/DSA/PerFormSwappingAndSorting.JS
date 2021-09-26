function PerformSwapping(arr, k) {

    for (let i = 0; i < arr.length - 1 && k > 0; ++i) {

        let point = i;

        for (let j = i + 1; j < arr.length; ++j) {
            if (j - i > k) {
                break;
            }
            if (arr[j] < arr[point]) {
                point = j;
            }
        }

        let temp;

        for (let j = point; j > i; --j) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }

        k -= point - i;

    }
    return arr.join(" ");
}



function runProgram(input) {

    let newData = input.split("\n");
    let testCases = Number(newData[0]);

    for (let i = 1; i <= testCases; i++) {

        let nANDk = newData[i * 2 - 1].split(" ").map(Number);
        let k = nANDk[1];

        let arr = newData[i * 2].split(" ").map(Number);

        let ans = PerformSwapping(arr, k);
        console.log(ans);

    }

}

if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
3 2
5 3 1
5 3
8 9 11 2 1`);
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