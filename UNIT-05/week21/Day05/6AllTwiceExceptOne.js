
function finbdSingleEle(arr) {

    var temp = 0;

    for (var i = 0; i < arr.length; i++) {
        temp = temp ^ arr[i]
    }
    return temp;

}


function runProgram(input) {
    let newData = input.split("\n");
    let testCases = Number(newData[0]);
    for (let i = 1; i <= testCases; i++) {
        let arr = newData[i * 2].split(" ").map(Number);
        console.log(finbdSingleEle(arr))
    }

}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`2
1
5
5
1 2 1 3 2`);
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
