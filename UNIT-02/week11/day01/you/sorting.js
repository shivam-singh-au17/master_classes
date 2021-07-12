

// BUBBLE SORT


// var arr = [5, 8, 6, 2, 6, 5, 9, 7, 6, 4, 3];

// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             var temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);



// SELECTION SORT


// var arr = [5, 8, 6, 2, 6, 5, 9, 7, 6, 4, 3];
var arr = [9, 8, 7, 6, 5, 4, 3, 4, 5, 6, 7, 99, 88, 66, 44];

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

console.log(arr);