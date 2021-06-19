
function isPrime(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
    return true;
}

function sumOfSuchPairs(arr, n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++)
            if (isPrime(j - i)) {
                sum = sum + Math.abs(arr[i] - arr[j]);
            }
    }
    return sum;
}

function runProgram(input) {

    var newInput = input.split("\n");

    var newInput2 = newInput[1].split(" ").map(Number);
    var n = newInput2.length

    primeNum = isPrime(n)
    var result1 = sumOfSuchPairs(newInput2, n);
    console.log(result1);

}
if (process.env.USERNAME === "shiva") {
    runProgram(`6
1 2 3 5 7 12`);
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