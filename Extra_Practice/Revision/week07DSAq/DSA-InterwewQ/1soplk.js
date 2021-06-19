
function findPrime(num) {

    if (num <= 1) {
        return 0;
    } else {
        var count = 0;
        for (var i = 2; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 1) {
            return num;
        } else {
            return 0;
        }
    }
}


function findSumLessK(arr, k) {
    var primeSum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < k && arr[i] == findPrime(arr[i])) {
            primeSum += arr[i]
        }
    }
    return primeSum;
}


function runProgram(input) {

    var data = input.split("\n");
    var testcases = Number(data[0]);

    for (var i = 1; i <= testcases; i++) {

        var inputArr = data[i * 2 + i - 1].split(" ").map(Number);
        var k = Number(data[i * 2 + i]);

        var res1 = findSumLessK(inputArr, k);
        console.log(res1);

    }
}


if (process.env.USERNAME === "shiva") {
    runProgram(`2
5
1 2 3 4 5
10
10
1 2 3 4 5 6 7 8 9 10
10`);
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

