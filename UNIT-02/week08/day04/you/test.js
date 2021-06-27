

function mostFrequent(arr, n) {

    arr.sort();

    var res = arr[0];
    var max_count = 1
    var curr_count = 1;

    for (var i = 1; i < n; i++) {
        
        if (arr[i] == arr[i - 1]) {
            curr_count++;
        } else {
            if (curr_count > max_count) {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }

    if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}



// var arr = [1, 2, 3, 4, 4, 4, 5, 5, 5];
// var arr = [6];
// var arr = [1, 1, 3, 4, 5, 6];
var arr = [-2, -2, -2, -3, -3, -3, -3];
var n = arr.length;
console.log(mostFrequent(arr, n));


