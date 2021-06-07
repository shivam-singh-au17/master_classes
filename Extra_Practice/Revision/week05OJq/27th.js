
function longestOdd(arr) {

    var res = 0;
    count = 1;
    var temp = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            if (arr[i] == temp) {
                count++;
                console.log(count);
            } else {
                res = Math.max(res, count)
                count = 1
                temp = arr[i]
            }
        }
    }
    return res;
}


function runProgram(input) {

    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);

    var result = longestOdd(arr);
    console.log(result);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`18
3 4 4 4 4 4 4 4 4`);
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

