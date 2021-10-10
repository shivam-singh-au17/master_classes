
function sortAcordingRequerment(arr, k) {
    let evenArr = "";
    let oddArr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr += arr[i] + " ";
        } else {
            oddArr += arr[i] + " ";
        }
    }
    if (k == 1) {
        let evenStr = evenArr + oddArr
        console.log(evenStr);
    } else {
        let oddStr = oddArr + evenArr
        console.log(oddStr);
    }
}



function runProgram(input) {
    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let arr = newData[i * 2 + i - 1].split(" ").map(Number);
        arr.sort((a, b) => { return a - b });
        let k = Number(newData[i * 2 + i]);
        sortAcordingRequerment(arr, k)
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
6
1 3 5 2 7 4
1
6
1 3 5 2 7 4
2`);
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
