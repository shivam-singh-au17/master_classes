
function BubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function printResult(arr) {
    var store = "";
    for (var i = 0; i < arr.length; i++) {
        store += arr[i] + " ";
    }
    return store;
}




function SelectionSort(arr) {
    var min = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


function printResult(arr) {
    var store = "";
    for (var i = 0; i < arr.length; i++) {
        store += arr[i] + " ";
    }
    return store;
}