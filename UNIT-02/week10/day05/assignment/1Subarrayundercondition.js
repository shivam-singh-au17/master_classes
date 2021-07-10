
function findSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function SubarrayUnderCondition(arr) {

    for (var i = 0; i < arr.length; i++) {
        var subArr = [];
        for (var j = i; j < arr.length; j++) {
            subArr.push(arr[j]);

            if (findSum(subArr) == 0) {
                console.log(i, j);
            }
        }
    }

}


function runProgram(input) {

    var arr = input.trim().split(" ").map(Number);
    console.log('arr:', arr)

    SubarrayUnderCondition(arr);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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

