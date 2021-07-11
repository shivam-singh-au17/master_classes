
// FIXME:
function longestSubarray(arr, k) {

    let left = -1;
    let right = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % k != 0) {
            if (left == -1) {
                left = i
                right = i
            }
        }
        sum += arr[i]
    }

    if (sum % k != 0) {
        return 1
    }else if (left == -1) {
        return 0
    }

    left = left + 1
    right = arr.length - right

    let max_window_size = arr.length - Math.min(left, right)
    return max_window_size

}


var arr = [2, 3, 4, 6];
var k = 3;

var ans = longestSubarray(arr, k);
console.log('ans:', ans)
