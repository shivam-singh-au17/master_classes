
function findOddNum(arr) {
    var count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 1) {
            count++;
        }
    }
    if (count > 0) {
        return true;
    } else {
        return false;
    }
}


function LongestRepeatedOdd(arr) {

    if (findOddNum(arr) == true) {
        var temp = arr[0];
        var count = 1;
        var res = 0;
        for (var i = 1; i <= arr.length; i++) {
            if (arr[i] % 2 == 1 && arr[i] == temp) {
                count++;
            } else {
                res = Math.max(count, res);
                temp = arr[i];
                count = 1;
            }
        }
        return res;
    } else {
        return 0;
    }
    
}

function runProgram(input) {

    var Input = input.split("\n");

    var arr = Input[1].split(" ").map(Number);
    var ans = LongestRepeatedOdd(arr);
    console.log(ans);

}

if (process.env.USERNAME === "shiva") {
    runProgram(`12
2 4 6 3 3 3 3 3 5 8`);
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

