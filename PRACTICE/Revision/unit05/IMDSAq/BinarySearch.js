

function findNumbItretive(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (key < arr[mid])
            high = mid - 1;
        else if (key > arr[mid])
            low = mid + 1;
        else
            return mid;
    }
    return -1;
}




function searchArrRecursive(arr, low, high, key) {

    arr.sort((a, b) => { return a - b });

    if (low <= high) {

        let mid = Math.floor(low + high / 2);

        if (arr[mid] == key) {
            return 1;
        }

        if (arr[mid] < key) {
            return searchArr(arr, mid + 1, high, key)
        } else {
            return searchArr(arr, low, mid - 1, key)
        }

    } else {
        return -1;
    }

}



function MinimumInRotedSortedaRR(arr) {

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






function SearchSortedAndRotatedArray(arr, key) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === key) {
            return mid;
        }
        else if (arr[mid] >= arr[low]) {
            if (key >= arr[low] && key < arr[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        else {
            if (key > arr[mid] && key <= arr[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}






function findPeakElement(arr) {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        }
        if (arr[mid] > arr[mid + 1]) {
            high = mid;
        }
    }
    return low;
};






function UpperBound(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let res = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (key < arr[mid]) {
            res = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
}




function LowerBound(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let res = -1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (key == arr[mid]) {
            res = mid;
            high = mid - 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
    return res;
}