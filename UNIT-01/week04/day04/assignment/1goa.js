
var rotate = function (arr, k) {

    var n = arr.length;

    if (k > n) {
        k = k % n;
        var rotateArr = "";
        for (var i = 0; i < n; i++) {
            var num = (i + k - n);
            if (num < 0) {
                num = (i + k)
                rotateArr += (arr[num]) + " ";
            } else {
                num = (i + k - n);
                rotateArr += (arr[num]) + " ";
            }
        }
        return rotateArr;

    } else {
        var rotateArr = "";
        for (var i = 0; i < n; i++) {
            var num = (i + k - n);
            if (num < 0) {
                num = (i + k)
                rotateArr += (arr[num]) + " ";
            } else {
                num = (i + k - n);
                rotateArr += (arr[num]) + " ";
            }
        }
        return rotateArr;

    }

}

function runProgram(input) {

    var newInput = input.split("\n");
    var newInput1 = newInput[0].split(" ").map(Number);
    var newInput2 = newInput[1].split(" ").map(Number);


    var result1 = rotate(newInput2, newInput1[1]);
    console.log(result1);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`4 38
4 1 8 3`);
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

