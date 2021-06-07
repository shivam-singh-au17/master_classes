
function findPairs(arr, target) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                count++;
            }
        }
    }
    return count;
}

function runProgram(input) {


    var Input = input.split("\n");
    var InputPart = Input[0].split(" ").map(Number);
    var target = InputPart[1]
    var arr = Input[1].split(" ").map(Number);

    var res = findPairs(arr, target);
    console.log(res);


}

if (process.env.USERNAME === "shiva") {
    runProgram(`5 9
3 0 6 2 7
`);
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
