
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let key = 8

function searchArr1(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(low + high / 2);

    while (low <= high) {

        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] < key) {
            low = mid + 1
        } else {
            high = mid - 1
        }

    }

    return -1;

}

let ans = searchArr1(arr, key)
console.log('ans:', ans)


function main(arr, key) {

    let low = 0;
    let high = arr.length - 1;
    return searchArr(arr, low, high, key)

}


function searchArr(arr, low, high, key) {

    let mid = Math.floor(low + high / 2);

    while (low <= high) {

        if (low > high) {
            return;
        } else {

            if (arr[mid] == key) {
                return mid;
            } else if (arr[mid] < key) {
                searchArr(arr, mid + 1, high, key)
            } else {
                searchArr(arr, low, mid - 1, key)
            }

        }

    }

    return -1;

}


// let ans = main(arr, key)
// console.log('ans:', ans)