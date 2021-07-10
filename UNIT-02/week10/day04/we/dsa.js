

// 1. SubArr sum ==  of k length

/*
var arr = [2, 4, 6, 8, 9, 6, 4, 2];
var k = 3;

function TakeMaximum(arr, k) {
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += arr[i];
    }

    console.log(sum);

    var res = sum;
    for (var i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        res = Math.max(sum, res);
    }
    return res;

}


*/
// FIXME:
var arr = [2, 4, 6, 8, 9, 6, 4, 2];
var k = 3;

function reverse(arr) {
    var low = 0;
    var high = arr.length - 1;
    while (low < high) {
        swap(arr, low, high);
        low++;
        high--;
    }
}
