// Given an array of numbers, return the elements that have even index(starting the count at 0) and are even
// Use Higher - order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]
// Screenshot of the output for the given input

array = [2, 4, 5, 3, 6, 8];

var evenIndex = function (items, index) {
    if (items % 2 == 0 && index % 2 == 0) {
        return items;
    }
}

var result = array.filter(evenIndex);
console.log(result);
