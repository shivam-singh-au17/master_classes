function findAverage(arr, n) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 == 1) {
            sum = sum + arr[i];
            count++;
        }
    }
    var average = sum / count;
    if (Math.floor(average) == Math.ceil(average)) {
        var ans = average;
    } else {
        var ans = Math.floor(average);
    }
    return ans;
}

function runProgram(input) {
    var data = input.split("\n");
    var test = +data[0];
    for (var i = 1; i <= test; i++) {
        var n = +data[i * 2 - 1];
        var arr = data[i * 2].split(" ").map(Number);
        console.log(findAverage(arr, n));
    }
}
runProgram(`2
3
1 2 3
5
2 2 2 2 1`);
