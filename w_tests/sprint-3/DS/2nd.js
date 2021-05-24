
function LargestElement(arr, max) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == max) {
           result += -1 + " "
        } else {
            result += arr[i] + " "
        }
    }
    return result
}

function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function runProgram(input) {

    var input = input.split("\n");
    var inputTimes = Number(input[0]);

    for (var i = 1; i <= inputTimes; i++){
        var arr = input[i * 2].split(" ").map(Number);
        var result2 = findMax(arr)
        var result1 = LargestElement(arr, result2)
        console.log(result1);
    }

}

if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
1 3 2
5
3 3 2 6 7`);
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