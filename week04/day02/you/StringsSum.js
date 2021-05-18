// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8
// Screenshot of the output for the array["Apple", "Windows", "Linux", "Kindle", "Quiz"]

var array = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var OddItems = function (items) {
    if ((items.length) % 2 == 1) {
        return items
    }
}

var itemsLengths = function (items) {
    return items.length;
}

var sumOfLengths = function (items1, items2) {
    return items1 + items2;
}

var oddItems = array.filter(OddItems).map(itemsLengths).reduce(sumOfLengths);
console.log(oddItems);



