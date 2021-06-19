
function checkPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        var count = 0;
        for (var i = 2; i <= num; i++){
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 1) {
            return true;
        } else {
            return false;
        }
    }
}



function countPrimeNum(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i]) == true) {
            count++;
        }
    }
    return count;
}


function runProgram(input) {
    var data = input.split("\n");
    var test = +data[0];
    for (var i = 1; i <= test; i++) {
        var arr = data[i * 2].split(" ").map(Number);
        var res = countPrimeNum(arr);
        console.log(res);
    }
}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
3
1 2 3
5
2 2 2 2 1`);
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
