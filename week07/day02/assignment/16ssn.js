

function upper_bound(array, length, value) {
    var low = 0;
    var high = length;
    while (low < high) {
        var mid = parseInt((low + high) / 2);
        if (value >= array[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}


function lower_bound(array, length, value) {
    var low = 0;
    var high = length;
    while (low < high) {
        var mid = parseInt((low + high) / 2);
        if (value <= array[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}


function findSextuplets(arr, n) {
    // Generating possible values of
    // RHS of the equation
    var index = 0;
    var RHS = Array.from({ length: n * n * n + 1 },
        (_, i) => 0);
    for (i = 0; i < n; i++) {
        // Checking d should be non-zero.
        if (arr[i] != 0) {
            for (j = 0; j < n; j++) {
                for (k = 0; k < n; k++) {
                    RHS[index++] = arr[i] *
                        (arr[j] + arr[k]);
                }
            }
        }
    }

    // Sort RHS so that we can do
    // binary search in it.
    RHS.sort((a, b) => a - b);

    // Generating all possible values
    // of LHS of the equation
    // and finding the number of occurrences
    // of the value in RHS.
    var result = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            for (k = 0; k < n; k++) {
                var val = arr[i] * arr[j] + arr[k];
                result += (upper_bound(RHS, index, val) -
                    lower_bound(RHS, index, val));
            }
        }
    }

    return result;
}

// Driven Program
var arr = [5, 7, 10];
var n = arr.length;
console.log(findSextuplets(arr, n));



// This code is contributed by 29AjayKumar

