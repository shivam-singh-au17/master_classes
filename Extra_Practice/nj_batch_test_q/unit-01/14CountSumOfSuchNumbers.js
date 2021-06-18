function primeCheck(num) {
    if (num <= 1) {
        return false;
    } else {
        var count = 0;
        for (var i = 2; i <= num; i++) {
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


function sumOfSuchNum(arr, n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (primeCheck(arr[i]) == true) {
            sum += arr[i];
        }
    }
    return sum;
}

function runProgram(input) {
    var data = input.split("\n");
    var test = +data[0];
    for (var i = 1; i <= test; i++) {
        var n = +data[i * 2 - 1];
        var arr = data[i * 2].split(" ").map(Number);
        console.log(sumOfSuchNum(arr, n));
    }
}
runProgram(`2
3
1 2 3
5
2 2 2 2 1`);