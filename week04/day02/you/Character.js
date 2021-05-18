// Given an array of string generate an array with their first characters
// Sample Input - ["Masai", "School"]
// Sample Output - ["M", "S"]
// Screenshot of the output for the array["apple", "windows", "ubuntu"]

var array = ["apple", "windows", "ubuntu"];

var firstChar = function (items) {
    return items[0]
}

var char = array.map(firstChar);
console.log(char);

