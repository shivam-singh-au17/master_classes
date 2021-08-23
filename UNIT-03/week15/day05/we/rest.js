

// MARGE SORT

function merge(arr, left, mid, right) {

    let n1 = mid - left + 1;
    let n2 = right - mid;

    let temp1 = [n1];
    let temp2 = [n2];


    for (let i = 0; i < n1; i++) {
        temp1[i] == arr[temp1 + i];
    }

    for (let j = 0; j < n2; j++) {
        temp2[i] == arr[mid + j + 1];
    }

    let k = 0;
    while (i < n1 && j < n2) {
        if (temp1[i] <= temp2[j]) {
            arr[k] = temp1[i];
            i++;
        } else {
            arr[k] = temp2[j];
            j++;
        }
        k++;
    }


    while (i < n1) {
        arr[k] = temp1[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = temp2[j];
        j++;
        k++;
    }

}


function mergeSort(arr, left, right) {

    if (left > right) {
        return arr;
    } else {
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    }

}

function main() {

    let arr = [3, 5, 0, 9, 8];
    let left = 0;
    let right = arr.length - 1;
    mergeSort(arr, left, right)

}

main()