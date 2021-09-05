
function findMin(arr) {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return arr[low];
}