
function findLength(arr) {
    var temp = arr[0];
    var count = 1;
    var result = [];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] == temp && arr[i] % 2 == 1) {
            count++;
        } else {
            result.push(count);
            count = 1;
            temp = arr[i];
        }
    }
    return result
}


function maxLength(result) {
    var max = result[0];
    for (var j = 0; j < result.length; j++) {
        if (result[j] > max) {
            max = result[j]
        }
    }
    return max;
}


function findCount(arr, ans) {
    count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 1) {
            count++;
        }
    }
    if (count == 0) {
        return 0
    }else {
        return ans;
    }
}



function runProgram(input) {
    var newInput = input.split("\n");

    var data = newInput[1].split(" ").map(Number);
    
    var allLength = findLength(data);
    var maxOddNum = maxLength(allLength);
    var printAns = findCount(data, maxOddNum);
    console.log(printAns);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`12
2 4 6 8 10`);
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

