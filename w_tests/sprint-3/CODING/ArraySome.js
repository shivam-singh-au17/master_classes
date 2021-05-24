// Given an array of numbers, return the elements that have even index(starting the count at 0) and are even
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]
// Screenshot of the output for the given input


var arr = [2, 4, 5, 3, 6, 8];

var arraySum = function (items, k) {
    if (items % 2 == 0 && k % 2 == 0) {
        return items;
    }
}

var result = arr.filter(arraySum);
console.log(result);