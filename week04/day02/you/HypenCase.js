// Given an array of strings convert them to hypen case
// Sample Input - ["Masai", "School"]
// Sample Output - masai - school
// Screenshot of the output for the array["Apple", "Windows", "UBUNTU"]


var array = ["apple", "windows", "ubuntu"];

var hypenCase = function (items, items2) {
    return items + "-" + items2
}

var result = array.reduce(hypenCase);
console.log(result);